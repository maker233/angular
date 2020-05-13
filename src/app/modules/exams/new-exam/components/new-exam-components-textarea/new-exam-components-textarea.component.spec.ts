import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsTextareaComponent } from './new-exam-components-textarea.component';
import { CommonModule } from '@angular/common';
import { NewExamRoutingModule } from '../../new-exam-routing.module';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbFocusMonitor, NbRadioModule } from '@nebular/theme';
import { NewExamComponent } from '../new-exam.component';
import { NewExamComponentsComponent } from '../new-exam-components/new-exam-components.component';
import { NewExamComponentsInputComponent } from '../new-exam-components-input/new-exam-components-input.component';
import { NewExamComponentsRadioComponent } from '../new-exam-components-radio/new-exam-components-radio.component';

describe('NewExamComponentsTextareaComponent', () => {
    let component: NewExamComponentsTextareaComponent;
    let fixture: ComponentFixture<NewExamComponentsTextareaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewExamComponent,
                NewExamComponentsComponent,
                NewExamComponentsTextareaComponent,
                NewExamComponentsInputComponent,
                NewExamComponentsRadioComponent,
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
        fixture = TestBed.createComponent(NewExamComponentsTextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
