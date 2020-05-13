export class ExamCheckModel {
    id: string;
    text: string;
    correcta: boolean;

    constructor(id: string, text: string) {
        this.id = id;
        this.text = text;
        this.correcta = false;
    }
}
