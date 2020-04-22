import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsTextareaComponent } from './new-exam-components-textarea.component';

describe('NewExamComponentsTextareaComponent', () => {
    let component: NewExamComponentsTextareaComponent;
    let fixture: ComponentFixture<NewExamComponentsTextareaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewExamComponentsTextareaComponent],
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
