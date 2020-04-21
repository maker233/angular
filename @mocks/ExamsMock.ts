import { ExamComponentModel } from '../src/app/modules/exams/new-exam/resources/exam-component.model';

export class ExamsMock {
    public static getComponents(): ExamComponentModel[] {
        return [
            {
                id: 1,
                name: 'Titulo',
                order: 1,
                component: 'titulo',
            },
            {
                id: 2,
                name: 'Introducir Texto',
                order: 2,
                component: 'titulo',
            },
            {
                id: 3,
                name: 'Campo texto para alumno',
                order: 3,
                component: 'titulo',
            },
            {
                id: 4,
                name: 'Respuestas radio',
                order: 4,
                component: 'titulo',
            },
            {
                id: 5,
                name: 'Respuestas check',
                order: 5,
                component: 'titulo',
            },
        ];
    }
}
