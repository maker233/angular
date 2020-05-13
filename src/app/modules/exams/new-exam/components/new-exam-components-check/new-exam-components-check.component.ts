import { Component, OnInit } from '@angular/core';
import { ExamCheckModel } from '../../resources/models/exam-check.model';

@Component({
    selector: 'ngx-new-exam-components-check',
    templateUrl: './new-exam-components-check.component.html',
    styleUrls: ['./new-exam-components-check.component.scss'],
})
export class NewExamComponentsCheckComponent implements OnInit {
    text: string;
    list: ExamCheckModel[];
    aceptado: boolean;
    count: number;
    radioGroupValue: string;

    ngOnInit() {
        this.count = 0;
        this.list = [];
    }

    setAceptado(aceptado: boolean) {
        this.aceptado = aceptado;
    }

    addRespuesta() {
        this.list.push(
            new ExamCheckModel((++this.count).toString(), this.text)
        );
        this.text = '';
    }

    get data() {
        return this.list;
    }
}
