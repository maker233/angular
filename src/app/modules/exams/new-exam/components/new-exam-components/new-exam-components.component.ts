import { Component, OnInit } from '@angular/core';
import { ExamComponentModel } from '../../resources/exam-component.model';
import { ExamsMock } from '../../../../../../../@mocks/ExamsMock';

@Component({
    selector: 'ngx-new-exam-components',
    templateUrl: './new-exam-components.component.html',
    styleUrls: ['./new-exam-components.component.scss'],
})
export class NewExamComponentsComponent implements OnInit {
    examComponents: ExamComponentModel[];
    examComponentSelected: number;

    ngOnInit(): void {
        this.examComponentSelected = 0;
        this.examComponents = ExamsMock.getComponents();
    }

    selected(id: number) {
        if (id === this.examComponentSelected) {
            this.examComponentSelected = 0;
            return;
        }
        this.examComponentSelected = id;
    }
}
