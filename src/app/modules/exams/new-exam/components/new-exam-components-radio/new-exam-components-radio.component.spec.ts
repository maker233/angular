import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsRadioComponent } from './new-exam-components-radio.component';
import { NewExamComponent } from '../new-exam.component';
import { NewExamComponentsComponent } from '../new-exam-components/new-exam-components.component';
import { CommonModule } from '@angular/common';
import { NewExamRoutingModule } from '../../new-exam-routing.module';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbRadioModule, NbFocusMonitor } from '@nebular/theme';

describe('NewExamComponentsRadioComponent', () => {
    let component: NewExamComponentsRadioComponent;
    let fixture: ComponentFixture<NewExamComponentsRadioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewExamComponent,
                NewExamComponentsComponent,
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
        fixture = TestBed.createComponent(NewExamComponentsRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
