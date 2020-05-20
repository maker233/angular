import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { ExamBBDDModel } from '../resources/exam-bbdd.model';
import { TitulacionBBDDModel } from '../resources/titulacion-bbdd.model';
import { Observable } from 'rxjs';
import { NivelesBBDDModel } from '../resources/niveles-bbdd.model';

@Injectable()
export class ExamsService {
    examRef: AngularFirestoreCollection<ExamBBDDModel>;
    tituRef: AngularFirestoreCollection<TitulacionBBDDModel>;

    constructor(private firestore: AngularFirestore) {
        this.examRef = this.firestore.collection<ExamBBDDModel>('exams');
        this.tituRef = this.firestore.collection<TitulacionBBDDModel>(
            'titulaciones'
        );
    }

    createExam(examBBDDModel: ExamBBDDModel): Promise<any> {
        return this.examRef.add(Object.assign({}, examBBDDModel));
    }

    getTitulaciones(): Observable<TitulacionBBDDModel[]> {
        return this.tituRef.valueChanges({ idField: 'id' });
    }

    getNivelesTitulacion(id: string): Observable<NivelesBBDDModel[]> {
        return this.tituRef
            .doc(id)
            .collection<NivelesBBDDModel>('niveles')
            .valueChanges({ idField: 'id' });
    }
}
