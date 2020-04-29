import {
    Component,
    ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef,
    OnInit,
} from '@angular/core';
import { ExamComponentModel } from '../resources/exam-component.model';
import { DynamicComponentModel } from '../resources/dynamic-component.model';
import { ExamModel } from '../../../../shared/resources/exam.model';
import { ComponentExamModel } from '../../../../shared/resources/component-exam.model';
import { NewExamComponentsManagerComponent } from './new-exam-components-manager/new-exam-components-manager.component';

@Component({
    selector: 'ngx-new-exam',
    templateUrl: './new-exam.component.html',
    styleUrls: ['./new-exam.component.scss'],
})
export class NewExamComponent implements OnInit {
    title: string;

    @ViewChild('components', { read: ViewContainerRef })
    dynamicComponent: ViewContainerRef;

    components: DynamicComponentModel[];
    nextId: number;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.components = [];
        this.nextId = 0;
    }

    addComponent(component: ExamComponentModel) {
        // TODO Crear funcionalidad para componentes dinamicos

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            NewExamComponentsManagerComponent
        );

        const componentRef = this.dynamicComponent.createComponent(
            componentFactory
        );
        componentRef.instance.id = ++this.nextId;
        this.components.push(
            new DynamicComponentModel(
                this.nextId,
                component.component,
                componentRef
            )
        );
        componentRef.instance.resComponent.subscribe((event) =>
            this.resComponents(event)
        );
        componentRef.location.nativeElement.setAttribute('class', 'fullWidth');
    }

    saveExam() {
        const exam = new ExamModel();
        exam.title = this.title;
        exam.components = [];
        for (const e of this.components) {
            switch (e.name) {
                case 'textArea':
                    this.saveComponentTextArea(exam, e);
            }
        }
    }

    saveComponentTextArea(exam: ExamModel, d: DynamicComponentModel) {
        exam.components.push(
            new ComponentExamModel(d.id, d.name, d.component.instance.text)
        );
    }

    resComponents(event: any) {
        if (event) {
            if (event.destroy) {
                this.destroyComponent(event.id);
            }
        }
    }

    destroyComponent(id: number) {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].id === id) {
                this.components[i].component.destroy();
                this.components.splice(i, 1);
                break;
            }
        }
    }
}
