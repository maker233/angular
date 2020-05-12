import { ExamComponentModel } from '../src/app/modules/exams/new-exam/resources/exam-component.model';
import { ExamComponentConstants } from '../src/app/modules/exams/new-exam/resources/exam-component.constants';

export class ExamsMock {
    public static getComponents(): ExamComponentModel[] {
        return [
            {
                id: 1,
                name: 'Introducir Texto',
                order: 1,
                component: ExamComponentConstants.getComponentTextArea(),
            },
            {
                id: 2,
                name: 'Campo texto para alumno',
                order: 2,
                component: ExamComponentConstants.getComponentInput(),
            },
            {
                id: 3,
                name: 'Respuestas radio',
                order: 3,
                component: ExamComponentConstants.getComponentRadio(),
            },
            {
                id: 4,
                name: 'Respuestas check',
                order: 4,
                component: ExamComponentConstants.getComponentCheck(),
            },
        ];
    }
}
