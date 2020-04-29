import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-new-exam-components-textarea',
    templateUrl: './new-exam-components-textarea.component.html',
    styleUrls: ['./new-exam-components-textarea.component.scss'],
})
export class NewExamComponentsTextareaComponent {
    text: string;
    resComponent: EventEmitter<string>;

    constructor() {
        this.resComponent = new EventEmitter();
    }

    save(): void {
        this.resComponent.emit(this.text);
    }
}
