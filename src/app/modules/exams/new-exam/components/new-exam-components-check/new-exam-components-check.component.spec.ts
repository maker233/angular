import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsCheckComponent } from './new-exam-components-check.component';
import { CommonModule } from '@angular/common';
import { NewExamRoutingModule } from '../../new-exam-routing.module';
import { FormsModule } from '@angular/forms';
import {
    NbInputModule,
    NbFocusMonitor,
    NbCheckboxModule,
} from '@nebular/theme';
import { NewExamComponent } from '../new-exam.component';
import { NewExamComponentsComponent } from '../new-exam-components/new-exam-components.component';

describe('NewExamComponentsCheckComponent', () => {
    let component: NewExamComponentsCheckComponent;
    let fixture: ComponentFixture<NewExamComponentsCheckComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewExamComponent,
                NewExamComponentsComponent,
                NewExamComponentsCheckComponent,
            ],
            imports: [
                CommonModule,
                NewExamRoutingModule,
                FormsModule,
                NbInputModule,
                NbCheckboxModule,
            ],
            providers: [NbFocusMonitor],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewExamComponentsCheckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
