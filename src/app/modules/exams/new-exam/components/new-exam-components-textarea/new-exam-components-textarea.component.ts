import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { DynamicComponent } from '../../resources/dynamic-component.interface';

@Component({
    selector: 'ngx-new-exam-components-textarea',
    templateUrl: './new-exam-components-textarea.component.html',
    styleUrls: ['./new-exam-components-textarea.component.scss'],
})
export class NewExamComponentsTextareaComponent
    implements OnInit, OnDestroy, DynamicComponent {
    resComponent: any;
    text: string;

    aceptado: boolean;

    constructor() {
        this.resComponent = new EventEmitter();
    }

    ngOnInit(): void {
        this.aceptado = false;
        this.resComponent.emit({ create: true });
    }

    ngOnDestroy(): void {
        this.resComponent.emit({ destroy: true });
    }

    save(): void {
        this.aceptado = true;
        this.resComponent.emit({ save: this.text });
    }

    modify(): void {
        this.aceptado = false;
    }
}
