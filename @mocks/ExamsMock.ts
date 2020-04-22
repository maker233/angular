import { ExamComponentModel } from '../src/app/modules/exams/new-exam/resources/exam-component.model';

export class ExamsMock {
    public static getComponents(): ExamComponentModel[] {
        return [
            {
                id: 1,
                name: 'Introducir Texto',
                order: 1,
                component: 'textArea',
            },
            {
                id: 2,
                name: 'Campo texto para alumno',
                order: 2,
                component: 'input',
            },
            {
                id: 3,
                name: 'Respuestas radio',
                order: 3,
                component: 'radio',
            },
            {
                id: 4,
                name: 'Respuestas check',
                order: 4,
                component: 'check',
            },
        ];
    }
}
