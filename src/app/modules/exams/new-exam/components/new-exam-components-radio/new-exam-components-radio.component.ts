import { Component, OnInit } from '@angular/core';
import { ExamRadioModel } from '../../resources/models/exam-radio.model';

@Component({
    selector: 'ngx-new-exam-components-radio',
    templateUrl: './new-exam-components-radio.component.html',
    styleUrls: ['./new-exam-components-radio.component.scss'],
})
export class NewExamComponentsRadioComponent implements OnInit {
    text: string;
    list: ExamRadioModel[];
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
            new ExamRadioModel((++this.count).toString(), this.text)
        );
        this.text = '';
    }

    loadRespuestaCorrecta() {
        for (const item of this.list) {
            item.correcta = this.radioGroupValue === item.id;
        }
    }

    get data() {
        this.loadRespuestaCorrecta();
        return this.list;
    }
}
