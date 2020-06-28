import { NivelesBBDDModel } from '../../../../shared/resources/niveles-bbdd.model';

export class NivelesTituModel {
    idTitu: string;
    niveles: NivelesBBDDModel[];

    constructor(idTitu: string, niveles: NivelesBBDDModel[]) {
        this.idTitu = idTitu;
        this.niveles = niveles;
    }
}
