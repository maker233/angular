export class ExamBBDDTableModel {
    id: string;
    degree: string;
    level: string;
    title: string;

    constructor(id: string, degree: string, level: string, title: string) {
        this.id = id;
        this.degree = degree;
        this.level = level;
        this.title = title;
    }
}
