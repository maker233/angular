import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { ExamBBDDModel } from '../resources/exam-bbdd.model';

@Injectable()
export class ExamsService {
    examRef: AngularFirestoreCollection<ExamBBDDModel>;

    constructor(private firestore: AngularFirestore) {
        this.examRef = this.firestore.collection<ExamBBDDModel>('exams');
    }

    createExam(examBBDDModel: ExamBBDDModel): Promise<any> {
        return this.examRef.add(Object.assign({}, examBBDDModel));
    }
}
