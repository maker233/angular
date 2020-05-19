import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'ngx-new-exam-dialog',
    templateUrl: './new-exam-dialog.component.html',
    styleUrls: ['./new-exam-dialog.component.scss'],
})
export class NewExamDialogComponent {
    selectedTitu: string;
    selectedNivel: string;

    constructor(protected ref: NbDialogRef<NewExamDialogComponent>) {}

    cancel() {
        this.ref.close();
    }

    aceptar() {
        this.ref.close({
            titulo: this.selectedTitu,
            nivel: this.selectedNivel,
        });
    }
}
