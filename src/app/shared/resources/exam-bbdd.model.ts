import { ExamModel } from './exam.model';
import { EncrDecrService } from '../services/encr-decr.service';
import { PracticeAppConstants } from '../constants/practice-app.constants';

export class ExamBBDDModel {
    id: string;
    degree: string;
    level: string;
    title: string;
    components: string;

    constructor(exam: ExamModel, encrDecr: EncrDecrService) {
        this.title = exam.title;
        this.level = exam.level;
        this.degree = exam.degree;
        const components = JSON.stringify(exam.components);
        this.components = encrDecr.set(
            PracticeAppConstants.getSecretKey(),
            components
        );
    }
}
