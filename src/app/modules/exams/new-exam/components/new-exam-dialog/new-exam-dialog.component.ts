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
        const tituNumber = parseInt(this.selectedTitu, 10);
        const nivelNumber = parseInt(this.selectedNivel, 10);
        this.ref.close({ titulo: tituNumber, nivel: nivelNumber });
    }
}
