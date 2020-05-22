import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ExamsService } from '../../../../shared/services/exams.service';
import { ExamBBDDModel } from '../../../../shared/resources/exam-bbdd.model';
import { TitulacionBBDDModel } from '../../../../shared/resources/titulacion-bbdd.model';
import { ExamBBDDTableModel } from '../../../../shared/resources/exam-bbdd-table.model';

@Component({
    selector: 'ngx-list-exam',
    templateUrl: './list-exam.component.html',
    styleUrls: ['./list-exam.component.scss'],
})
export class ListExamComponent implements OnInit {
    exams: ExamBBDDModel[];
    titulaciones: TitulacionBBDDModel[];
    data: ExamBBDDTableModel[];

    settings = {
        actions: {
            add: false,
            edit: false,
            delete: true,
            position: 'right',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            title: {
                title: 'Nombre',
                type: 'number',
            },
            degree: {
                title: 'Titulación',
                type: 'string',
            },
            level: {
                title: 'Nivel',
                type: 'string',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private examsService: ExamsService) {}

    ngOnInit(): void {
        this.loadExams();
    }

    loadExams() {
        this.examsService.list().subscribe((data) => {
            this.exams = data;
            this.loadTitulaciones();
        });
    }

    loadTitulaciones() {
        this.examsService.getTitulaciones().subscribe((data) => {
            this.titulaciones = data;
            this.loadData();
        });
    }

    loadData() {
        this.data = [];
        for (const item of this.exams) {
            this.data.push(
                new ExamBBDDTableModel(
                    item.id,
                    this.getNameTitulacionById(item.degree),
                    '',
                    item.title
                )
            );
        }
        this.source.load(this.data);
    }

    getNameTitulacionById(id: string) {
        for (const titu of this.titulaciones) {
            if (titu.id === id) {
                return titu.nombre;
            }
        }
        return '';
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
