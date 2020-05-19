import {
    Component,
    ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef,
    OnInit,
    ChangeDetectorRef,
} from '@angular/core';
import { ExamComponentModel } from '../resources/models/exam-component.model';
import { DynamicComponentModel } from '../resources/dynamic-component.model';
import { ExamModel } from '../../../../shared/resources/exam.model';
import { ComponentExamModel } from '../../../../shared/resources/component-exam.model';
import { NewExamComponentsManagerComponent } from './new-exam-components-manager/new-exam-components-manager.component';
import { NbDialogService } from '@nebular/theme';
import { NewExamDialogComponent } from './new-exam-dialog/new-exam-dialog.component';
import { EncrDecrService } from '../../../../shared/services/encr-decr.service';

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
    titulacion: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private cd: ChangeDetectorRef,
        private dialogService: NbDialogService,
        private encrDecr: EncrDecrService
    ) {}

    ngOnInit() {
        this.components = [];
        this.nextId = 0;
    }

    addComponent(component: ExamComponentModel) {
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
        this.cd.detectChanges();
        componentRef.instance.setComponent(component);
    }

    confirmExam() {
        this.dialogService
            .open(NewExamDialogComponent)
            .onClose.subscribe((res) => this.saveExam(res.titulo, res.nivel));
    }

    saveExam(titulacion: string, nivel: string) {
        const exam = new ExamModel();
        exam.title = this.title;
        exam.degree = titulacion;
        exam.level = nivel;
        exam.components = [];
        for (const e of this.components) {
            this.saveDinamicComponent(exam, e);
        }
        // const exambbddModel = new ExamBBDDModel(exam, this.encrDecr);

        /*const decrypted = this.encrDecr.get(PracticeAppConstants.getSecretKey(), encrypted);
        console.log('Encrypted :' + encrypted);
        console.log('Decrypted :' + decrypted);
        const mijson: ComponentExamModel[] = JSON.parse(decrypted);
        console.log('json', mijson);*/
    }

    saveDinamicComponent(exam: ExamModel, d: DynamicComponentModel) {
        exam.components.push(new ComponentExamModel(d.id, d.name, d.data));
    }

    resComponents(event: any) {
        if (event) {
            if (event.destroy) {
                this.destroyComponent(event.id);
            } else if (event.save) {
                this.saveDataComponent(event.id, event.data);
            } else if (event.modify) {
                this.modifyComponent(event.id);
            }
        }
    }

    modifyComponent(id: number) {
        for (const component of this.components) {
            if (component.id === id) {
                component.accepted = false;
                break;
            }
        }
    }

    saveDataComponent(id: number, data: any) {
        for (const component of this.components) {
            if (component.id === id) {
                component.data = data;
                component.accepted = true;
                break;
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
