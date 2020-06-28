import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ExamsService } from '../../../../shared/services/exams.service';
import { ExamBBDDModel } from '../../../../shared/resources/exam-bbdd.model';
import { TitulacionBBDDModel } from '../../../../shared/resources/titulacion-bbdd.model';
import { ExamBBDDTableModel } from '../../../../shared/resources/exam-bbdd-table.model';
import { NivelesTituModel } from '../resources/models/niveles-titu.model';
import { ListConstants } from '../resources/constants/list.constants';

@Component({
    selector: 'ngx-list-exam',
    templateUrl: './list-exam.component.html',
    styleUrls: ['./list-exam.component.scss'],
})
export class ListExamComponent implements OnInit {
    exams: ExamBBDDModel[];
    titulaciones: TitulacionBBDDModel[];
    niveles: NivelesTituModel[];
    data: ExamBBDDTableModel[];

    working: boolean;
    jobs: number;

    settings = ListConstants.getTableSettings();

    source: LocalDataSource = new LocalDataSource();

    constructor(private examsService: ExamsService) {}

    ngOnInit(): void {
        // this.working = true;
        this.working = false;
        this.jobs = 0;
        this.loadExams();
        this.loadTitulaciones();
    }

    loadExams() {
        this.jobs++;
        this.examsService.list().subscribe((data) => {
            this.exams = data;
            this.finalizeJob();
        });
    }

    loadTitulaciones() {
        this.jobs++;
        this.examsService.getTitulaciones().subscribe((data) => {
            this.titulaciones = data;
            this.loadNiveles();
            this.finalizeJob();
        });
    }

    getNiveles(id: string) {
        this.jobs++;
        this.examsService.getNivelesTitulacion(id).subscribe((data) => {
            this.niveles.push(new NivelesTituModel(id, data));
            this.finalizeJob();
        });
    }

    loadNiveles() {
        this.niveles = [];
        for (const titu of this.titulaciones) {
            this.getNiveles(titu.id);
        }
    }

    loadData() {
        this.data = [];
        for (const item of this.exams) {
            this.data.push(
                new ExamBBDDTableModel(
                    item.id,
                    this.getNameTitulacionById(item.degree),
                    this.getNameNivel(item.degree, item.level),
                    item.title
                )
            );
        }
        this.source.load(this.data);
    }

    getNameTitulacionById(id: string) {
        if (this.titulaciones) {
            for (const titu of this.titulaciones) {
                if (titu.id === id) {
                    return titu.nombre;
                }
            }
        }
        return '';
    }

    getNameNivel(idTitu: string, idNivel: string) {
        for (const titu of this.niveles) {
            if (titu.idTitu === idTitu) {
                for (const nivel of titu.niveles) {
                    if (nivel.id === idNivel) {
                        return nivel.nombre;
                    }
                }
            }
        }
        return '';
    }

    onDeleteConfirm(event): void {
        if (event.data && event.data.id) {
            if (window.confirm('¿Quieres eliminarlo?')) {
                this.examsService.remove(event.data.id);
                event.confirm.resolve();
            } else {
                event.confirm.reject();
            }
        }
    }

    finalizeJob() {
        this.jobs--;
        if (this.jobs <= 0) {
            this.working = false;
            this.loadData();
        }
    }
}
