import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsInputComponent } from './new-exam-components-input.component';
import { NewExamComponent } from '../new-exam.component';
import { NewExamComponentsComponent } from '../new-exam-components/new-exam-components.component';
import { CommonModule } from '@angular/common';
import { NewExamRoutingModule } from '../../new-exam-routing.module';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbFocusMonitor } from '@nebular/theme';

describe('NewExamComponentsInputComponent', () => {
    let component: NewExamComponentsInputComponent;
    let fixture: ComponentFixture<NewExamComponentsInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewExamComponent,
                NewExamComponentsComponent,
                NewExamComponentsInputComponent,
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
        fixture = TestBed.createComponent(NewExamComponentsInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
