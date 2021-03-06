import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsManagerComponent } from './new-exam-components-manager.component';
import { NewExamComponent } from '../new-exam.component';
import { NewExamComponentsComponent } from '../new-exam-components/new-exam-components.component';
import { NewExamComponentsTextareaComponent } from '../new-exam-components-textarea/new-exam-components-textarea.component';
import { CommonModule } from '@angular/common';
import { NewExamRoutingModule } from '../../new-exam-routing.module';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbFocusMonitor, NbRadioModule } from '@nebular/theme';
import { NewExamComponentsInputComponent } from '../new-exam-components-input/new-exam-components-input.component';
import { NewExamComponentsRadioComponent } from '../new-exam-components-radio/new-exam-components-radio.component';

describe('NewExamComponentsManagerComponent', () => {
    let component: NewExamComponentsManagerComponent;
    let fixture: ComponentFixture<NewExamComponentsManagerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewExamComponent,
                NewExamComponentsComponent,
                NewExamComponentsTextareaComponent,
                NewExamComponentsInputComponent,
                NewExamComponentsRadioComponent,
                NewExamComponentsManagerComponent,
            ],
            imports: [
                CommonModule,
                NewExamRoutingModule,
                FormsModule,
                NbInputModule,
                NbRadioModule,
            ],
            providers: [NbFocusMonitor],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewExamComponentsManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
