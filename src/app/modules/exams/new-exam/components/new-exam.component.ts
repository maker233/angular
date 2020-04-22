import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ExamComponentModel } from '../resources/exam-component.model';
import { DynamicComponentDirective } from '../../../../shared/directives/dynamicComponent.directive';
import { NewExamComponentsTextareaComponent } from './new-exam-components-textarea/new-exam-components-textarea.component';
import { DynamicComponent } from '../resources/dynamic-component.interface';

@Component({
    selector: 'ngx-new-exam',
    templateUrl: './new-exam.component.html',
    styleUrls: ['./new-exam.component.scss'],
})
export class NewExamComponent {
    title: string;

    @ViewChild(DynamicComponentDirective, { static: true })
    dynamicComponent: DynamicComponentDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    addComponent(component: ExamComponentModel) {
        // TODO Crear funcionalidad para componentes dinamicos

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            NewExamComponentsTextareaComponent
        );

        const viewContainerRef = this.dynamicComponent.viewContainerRef;

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as DynamicComponent).data = null;
    }

    removeComponent() {
        // Eliminar componentes
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
