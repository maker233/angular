import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsManagerComponent } from './new-exam-components-manager.component';
import { NewExamComponent } from '../new-exam.component';
import { NewExamComponentsComponent } from '../new-exam-components/new-exam-components.component';
import { NewExamComponentsTextareaComponent } from '../new-exam-components-textarea/new-exam-components-textarea.component';
import { CommonModule } from '@angular/common';
import { NewExamRoutingModule } from '../../new-exam-routing.module';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbFocusMonitor } from '@nebular/theme';

describe('NewExamComponentsManagerComponent', () => {
    let component: NewExamComponentsManagerComponent;
    let fixture: ComponentFixture<NewExamComponentsManagerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewExamComponentsManagerComponent,
                NewExamComponent,
                NewExamComponentsComponent,
                NewExamComponentsTextareaComponent,
            ],
            imports: [
                CommonModule,
                NewExamRoutingModule,
                FormsModule,
                NbInputModule,
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
