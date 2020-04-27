export class DynamicComponentModel {
    id: number;
    name: string;
    component: any;

    constructor(id: number, name: string, component: any) {
        this.id = id;
        this.name = name;
        this.component = component;
    }
}
