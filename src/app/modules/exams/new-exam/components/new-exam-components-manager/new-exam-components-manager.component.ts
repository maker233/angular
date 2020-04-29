import {
    Component,
    EventEmitter,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';
import { ExamComponentModel } from '../../resources/exam-component.model';
import { NewExamComponentsTextareaComponent } from '../new-exam-components-textarea/new-exam-components-textarea.component';

@Component({
    selector: 'ngx-new-exam-components-manager',
    templateUrl: './new-exam-components-manager.component.html',
    styleUrls: ['./new-exam-components-manager.component.scss'],
})
export class NewExamComponentsManagerComponent {
    resComponent: any;
    text: string;
    id: number;

    aceptado: boolean;

    component: ExamComponentModel;

    @ViewChild('component', { read: ViewContainerRef })
    dynamicComponent: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.resComponent = new EventEmitter();
    }

    setComponent(component: ExamComponentModel) {
        this.component = component;
        this.aceptado = false;

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.getClassByComponent(component)
        );

        const componentRef = this.dynamicComponent.createComponent(
            componentFactory
        );

        componentRef.location.nativeElement.setAttribute('class', 'fullWidth');
    }

    loadSubscribe(component: ExamComponentModel, componentRef: any) {
        if (component.component === 'textArea') {
            (componentRef.instance as NewExamComponentsTextareaComponent).resComponent.subscribe(
                (event) => this.resComponents(event)
            );
        }
    }

    getClassByComponent(component: ExamComponentModel): any {
        if (component.component === 'textArea') {
            return NewExamComponentsTextareaComponent;
        }
        return null;
    }

    resComponents(event: any) {
        if (event) {
            // Prueba
        }
    }

    save(): void {
        this.aceptado = true;
    }

    remove() {
        this.resComponent.emit({ destroy: true, id: this.id });
    }

    modify(): void {
        this.aceptado = false;
    }
}
