import { Component } from '@angular/core';
import { MENU_ITEMS } from './dashboard-menu';
import { AuthService } from '../../../shared/auth/services/auth.service';

@Component({
    selector: 'ngx-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    menu = MENU_ITEMS;
    constructor(private authService: AuthService) {}

    logout() {
        this.authService.logout();
    }
}
