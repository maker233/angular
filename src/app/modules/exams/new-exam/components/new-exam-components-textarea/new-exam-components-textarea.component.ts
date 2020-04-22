import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    OnDestroy,
} from '@angular/core';
import { DynamicComponent } from '../../resources/dynamic-component.interface';

@Component({
    selector: 'ngx-new-exam-components-textarea',
    templateUrl: './new-exam-components-textarea.component.html',
    styleUrls: ['./new-exam-components-textarea.component.scss'],
})
export class NewExamComponentsTextareaComponent
    implements OnInit, OnDestroy, DynamicComponent {
    @Output() resComponent = new EventEmitter();

    text: string;
    data: any;

    ngOnInit(): void {
        this.resComponent.emit({ create: true });
    }

    ngOnDestroy(): void {
        this.resComponent.emit({ destroy: true });
    }

    save(): void {
        this.resComponent.emit({ save: this.text });
    }
}
