import { Component } from '@angular/core';

@Component({
    selector: 'ngx-new-exam-components-textarea',
    templateUrl: './new-exam-components-textarea.component.html',
    styleUrls: ['./new-exam-components-textarea.component.scss'],
})
export class NewExamComponentsTextareaComponent {
    text: string;
    aceptado: boolean;

    setAceptado(aceptado: boolean) {
        this.aceptado = aceptado;
    }

    get data() {
        return this.text;
    }
}
