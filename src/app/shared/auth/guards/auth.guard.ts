import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.getUser().then((authenticated) => {
            if (!authenticated) {
                this.router.navigate(['/login']);
            } else {
                return true;
            }
        });
    }
}
