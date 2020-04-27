import { Component, OnInit, EventEmitter } from '@angular/core';
import { DynamicComponent } from '../../resources/dynamic-component.interface';

@Component({
    selector: 'ngx-new-exam-components-textarea',
    templateUrl: './new-exam-components-textarea.component.html',
    styleUrls: ['./new-exam-components-textarea.component.scss'],
})
export class NewExamComponentsTextareaComponent
    implements OnInit, DynamicComponent {
    resComponent: any;
    text: string;
    id: number;

    aceptado: boolean;

    constructor() {
        this.resComponent = new EventEmitter();
    }

    ngOnInit(): void {
        this.aceptado = false;
    }

    save(): void {
        this.aceptado = true;
    }

    remove() {
        this.resComponent.emit({ destroy: true, id: this.id });
    }

    modify(): void {
        this.aceptado = false;
    }
}
