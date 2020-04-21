import { Component } from '@angular/core';
import { ExamComponentModel } from '../resources/exam-component.model';

@Component({
    selector: 'ngx-new-exam',
    templateUrl: './new-exam.component.html',
    styleUrls: ['./new-exam.component.scss'],
})
export class NewExamComponent {
    addComponent(component: ExamComponentModel) {
        // TODO Crear funcionalidad para componentes dinamicos
    }
}
