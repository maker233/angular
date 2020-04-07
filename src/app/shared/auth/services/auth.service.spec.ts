import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AuthServiceMock } from '../../../../../@mocks/AuthServiceMock';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: AuthService, useClass: AuthServiceMock }],
        });
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
