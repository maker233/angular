import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../../../shared/auth/auth.module';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { AuthServiceMock } from '../../../../../@mocks/AuthServiceMock';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [
                CommonModule,
                DashboardRoutingModule,
                RouterTestingModule,
                AuthModule,
            ],
            providers: [{ provide: AuthService, useClass: AuthServiceMock }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
