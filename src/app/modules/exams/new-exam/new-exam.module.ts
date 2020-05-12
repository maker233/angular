import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewExamRoutingModule } from './new-exam-routing.module';
import { NewExamComponent } from './components/new-exam.component';
import { NewExamComponentsComponent } from './components/new-exam-components/new-exam-components.component';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NewExamComponentsTextareaComponent } from './components/new-exam-components-textarea/new-exam-components-textarea.component';
import { NewExamComponentsManagerComponent } from './components/new-exam-components-manager/new-exam-components-manager.component';
import { NewExamComponentsInputComponent } from './components/new-exam-components-input/new-exam-components-input.component';

@NgModule({
    declarations: [
        NewExamComponent,
        NewExamComponentsComponent,
        NewExamComponentsTextareaComponent,
        NewExamComponentsManagerComponent,
        NewExamComponentsInputComponent,
    ],
    imports: [
        CommonModule,
        NewExamRoutingModule,
        NbButtonModule,
        FormsModule,
        NbInputModule,
    ],
    entryComponents: [NewExamComponentsTextareaComponent],
})
export class NewExamModule {}
