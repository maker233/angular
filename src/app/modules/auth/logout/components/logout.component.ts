import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/auth/services/auth.service';

@Component({
    selector: 'ngx-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
    constructor(private auth: AuthService) {}

    ngOnInit(): void {
        this.auth.logout();
    }
}
