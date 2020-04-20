import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './components/logout.component';
import { AuthModule } from '../../../shared/auth/auth.module';

@NgModule({
    declarations: [LogoutComponent],
    imports: [CommonModule, LogoutRoutingModule, AuthModule],
})
export class LogoutModule {}
