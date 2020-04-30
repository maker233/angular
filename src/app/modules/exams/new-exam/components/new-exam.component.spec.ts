import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponent } from './new-exam.component';
import { CommonModule } from '@angular/common';
import { NewExamRoutingModule } from '../new-exam-routing.module';
import { NewExamComponentsComponent } from './new-exam-components/new-exam-components.component';
import { FormsModule } from '@angular/forms';

describe('NewExamComponent', () => {
    let component: NewExamComponent;
    let fixture: ComponentFixture<NewExamComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewExamComponent, NewExamComponentsComponent],
            imports: [CommonModule, NewExamRoutingModule, FormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewExamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
