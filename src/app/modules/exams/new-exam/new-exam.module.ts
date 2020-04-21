import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewExamRoutingModule } from './new-exam-routing.module';
import { NewExamComponent } from './components/new-exam.component';
import { NewExamComponentsComponent } from './components/new-exam-components/new-exam-components.component';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
    declarations: [NewExamComponent, NewExamComponentsComponent],
    imports: [CommonModule, NewExamRoutingModule, NbButtonModule],
})
export class NewExamModule {}
