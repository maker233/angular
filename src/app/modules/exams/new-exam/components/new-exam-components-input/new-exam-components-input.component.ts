import { Component } from '@angular/core';

@Component({
    selector: 'ngx-new-exam-components-input',
    templateUrl: './new-exam-components-input.component.html',
    styleUrls: ['./new-exam-components-input.component.scss'],
})
export class NewExamComponentsInputComponent {
    text: string;
    aceptado: boolean;

    setAceptado(aceptado: boolean) {
        this.aceptado = aceptado;
    }

    get data() {
        return this.text;
    }
}
