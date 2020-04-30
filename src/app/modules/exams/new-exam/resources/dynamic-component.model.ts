export class DynamicComponentModel {
    id: number;
    name: string;
    component: any;
    data: any;
    accepted: boolean;

    constructor(id: number, name: string, component: any) {
        this.id = id;
        this.name = name;
        this.component = component;
    }
}
