import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExamRoutingModule } from './list-exam-routing.module';
import { ListExamComponent } from './components/list-exam.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

@NgModule({
    declarations: [ListExamComponent],
    imports: [
        CommonModule,
        ListExamRoutingModule,
        Ng2SmartTableModule,
        NbCardModule,
    ],
})
export class ListExamModule {}
