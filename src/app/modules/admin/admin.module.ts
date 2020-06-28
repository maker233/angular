import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

import { AdminChartsComponent } from './components/admincharts/admincharts.component';
import { UsersTableComponent } from './components/userstable/userstable.component';

@NgModule({
    declarations: [AdminComponent, AdminChartsComponent, UsersTableComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        Ng2SmartTableModule,
        NbCardModule,
    ],
})
export class AdminModule {}
