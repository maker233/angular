import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamComponentsComponent } from './new-exam-components.component';

describe('NewExamComponentsComponent', () => {
    let component: NewExamComponentsComponent;
    let fixture: ComponentFixture<NewExamComponentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewExamComponentsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewExamComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
