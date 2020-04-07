import { Component } from '@angular/core';
import { AuthService } from '../../../shared/auth/services/auth.service';

@Component({
    selector: 'ngx-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    constructor(private authService: AuthService) {}

    logout() {
        this.authService.logout();
    }
}
