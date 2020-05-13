import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExamComponentModel } from '../../resources/models/exam-component.model';
import { ExamsMock } from '../../../../../../../@mocks/ExamsMock';

@Component({
    selector: 'ngx-new-exam-components',
    templateUrl: './new-exam-components.component.html',
    styleUrls: ['./new-exam-components.component.scss'],
})
export class NewExamComponentsComponent implements OnInit {
    @Output()
    resExamComponent: EventEmitter<ExamComponentModel> = new EventEmitter<
        ExamComponentModel
    >();

    examComponents: ExamComponentModel[];
    examComponentSelected: ExamComponentModel;

    ngOnInit(): void {
        this.examComponentSelected = null;
        this.examComponents = ExamsMock.getComponents();
    }

    selected(componentSelected: ExamComponentModel) {
        if (
            this.examComponentSelected &&
            this.examComponentSelected.id === componentSelected.id
        ) {
            this.examComponentSelected = null;
            return;
        }
        this.examComponentSelected = componentSelected;
    }

    addComponent() {
        this.resExamComponent.emit(this.examComponentSelected);
    }
}
