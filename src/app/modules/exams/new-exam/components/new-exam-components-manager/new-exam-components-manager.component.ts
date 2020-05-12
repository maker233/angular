import {
    Component,
    EventEmitter,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
} from '@angular/core';
import { ExamComponentModel } from '../../resources/exam-component.model';
import { NewExamComponentsTextareaComponent } from '../new-exam-components-textarea/new-exam-components-textarea.component';
import { ExamComponentConstants } from '../../resources/exam-component.constants';
import { NewExamComponentsInputComponent } from '../new-exam-components-input/new-exam-components-input.component';

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

    @ViewChild('compManager', { read: ViewContainerRef })
    dynamicComponent: ViewContainerRef;

    componentRef: ComponentRef<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.resComponent = new EventEmitter();
    }

    setComponent(component: ExamComponentModel) {
        this.component = component;
        this.aceptado = false;

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.getClassByComponent(component)
        );

        this.componentRef = this.dynamicComponent.createComponent(
            componentFactory
        );

        this.componentRef.location.nativeElement.setAttribute(
            'class',
            'fullWidth'
        );
    }

    getClassByComponent(component: ExamComponentModel): any {
        switch (this.component.component) {
            case ExamComponentConstants.getComponentTextArea():
                return NewExamComponentsTextareaComponent;
            case ExamComponentConstants.getComponentInput():
                return NewExamComponentsInputComponent;
        }
        return null;
    }

    save(): void {
        this.aceptado = true;
        this.componentRef.instance.aceptado = this.aceptado;
        const data = this.getDynamicData();
        this.resComponent.emit({ save: true, id: this.id, data });
    }

    getDynamicData(): any {
        if (!this.componentRef) {
            return;
        }

        switch (this.component.component) {
            case ExamComponentConstants.getComponentTextArea():
                return (this.componentRef
                    .instance as NewExamComponentsTextareaComponent).data;
            case ExamComponentConstants.getComponentInput():
                return (this.componentRef
                    .instance as NewExamComponentsInputComponent).data;
        }
    }

    remove() {
        this.resComponent.emit({ destroy: true, id: this.id });
    }

    modify(): void {
        this.aceptado = false;
        this.componentRef.instance.aceptado = this.aceptado;
        this.resComponent.emit({ modify: true, id: this.id });
    }
}
