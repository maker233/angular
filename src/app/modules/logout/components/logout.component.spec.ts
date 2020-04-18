import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LogoutRoutingModule } from '../logout-routing.module';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { AuthServiceMock } from '../../../../../@mocks/AuthServiceMock';

describe('LogoutComponent', () => {
    let component: LogoutComponent;
    let fixture: ComponentFixture<LogoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LogoutComponent],
            imports: [CommonModule, LogoutRoutingModule, RouterTestingModule],
            providers: [{ provide: AuthService, useClass: AuthServiceMock }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
