import {
    Component,
    ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef,
} from '@angular/core';
import { ExamComponentModel } from '../resources/exam-component.model';
import { NewExamComponentsTextareaComponent } from './new-exam-components-textarea/new-exam-components-textarea.component';
import { DynamicComponent } from '../resources/dynamic-component.interface';

@Component({
    selector: 'ngx-new-exam',
    templateUrl: './new-exam.component.html',
    styleUrls: ['./new-exam.component.scss'],
})
export class NewExamComponent {
    title: string;

    @ViewChild('components', { read: ViewContainerRef })
    dynamicComponent: ViewContainerRef;

    componenteUno: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    addComponent(component: ExamComponentModel) {
        // TODO Crear funcionalidad para componentes dinamicos

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            NewExamComponentsTextareaComponent
        );

        const componentRef = this.dynamicComponent.createComponent(
            componentFactory
        );
        this.componenteUno = componentRef;
        (componentRef.instance as DynamicComponent).data = null;
        componentRef.location.nativeElement.setAttribute('class', 'fullWidth');
    }

    removeComponent() {
        this.componenteUno.destroy();
    }

    saveExam() {
        // TODO implementations
    }

    resComponents(event: any) {
        if (event) {
            if (event.create) {
                this.createComponent();
            } else if (event.destroy) {
                this.destroyComponent();
            } else if (event.save) {
                this.saveComponent();
            }
        }
    }

    createComponent() {
        // console.log('Nuevo componente');
    }

    destroyComponent() {
        // console.log('Eliminado componente');
    }

    saveComponent() {
        // console.log('Guardado componente');
    }
}
