import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ExamsService } from '../../../../../shared/services/exams.service';
import { TitulacionBBDDModel } from '../../../../../shared/resources/titulacion-bbdd.model';
import { NivelesBBDDModel } from '../../../../../shared/resources/niveles-bbdd.model';

@Component({
    selector: 'ngx-new-exam-dialog',
    templateUrl: './new-exam-dialog.component.html',
    styleUrls: ['./new-exam-dialog.component.scss'],
})
export class NewExamDialogComponent implements OnInit {
    selectedTitu: TitulacionBBDDModel;
    selectedNivel: NivelesBBDDModel;

    titulaciones: TitulacionBBDDModel[];
    niveles: NivelesBBDDModel[];

    constructor(
        protected ref: NbDialogRef<NewExamDialogComponent>,
        private examsService: ExamsService
    ) {}

    ngOnInit() {
        this.examsService.getTitulaciones().subscribe((data) => {
            this.titulaciones = data;
        });
    }

    cancel() {
        this.ref.close();
    }

    aceptar() {
        this.ref.close({
            titulo: this.selectedTitu.id,
            nivel: this.selectedNivel.id,
        });
    }

    tituloSeleccionado() {
        this.selectedNivel = null;
        this.examsService
            .getNivelesTitulacion(this.selectedTitu.id)
            .subscribe(
                (data) =>
                    (this.niveles = data.sort((a, b) =>
                        this.compareToNiveles(a, b)
                    ))
            );
    }

    compareToNiveles(a: NivelesBBDDModel, b: NivelesBBDDModel) {
        if (a.orden < b.orden) {
            return -1;
        } else if (a.orden > b.orden) {
            return 1;
        }
        return 0;
    }
}
