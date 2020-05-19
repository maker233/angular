import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewExamRoutingModule } from './new-exam-routing.module';
import { NewExamComponent } from './components/new-exam.component';
import { NewExamComponentsComponent } from './components/new-exam-components/new-exam-components.component';
import {
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
    NbDialogModule,
    NbCardModule,
    NbSelectModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NewExamComponentsTextareaComponent } from './components/new-exam-components-textarea/new-exam-components-textarea.component';
import { NewExamComponentsManagerComponent } from './components/new-exam-components-manager/new-exam-components-manager.component';
import { NewExamComponentsInputComponent } from './components/new-exam-components-input/new-exam-components-input.component';
import { NewExamComponentsRadioComponent } from './components/new-exam-components-radio/new-exam-components-radio.component';
import { NewExamComponentsCheckComponent } from './components/new-exam-components-check/new-exam-components-check.component';
import { NewExamDialogComponent } from './components/new-exam-dialog/new-exam-dialog.component';
import { EncrDecrService } from '../../../shared/services/encr-decr.service';

@NgModule({
    declarations: [
        NewExamComponent,
        NewExamComponentsComponent,
        NewExamComponentsTextareaComponent,
        NewExamComponentsManagerComponent,
        NewExamComponentsInputComponent,
        NewExamComponentsRadioComponent,
        NewExamComponentsCheckComponent,
        NewExamDialogComponent,
    ],
    imports: [
        CommonModule,
        NewExamRoutingModule,
        NbButtonModule,
        FormsModule,
        NbInputModule,
        NbRadioModule,
        NbCheckboxModule,
        NbDialogModule,
        NbCardModule,
        NbSelectModule,
    ],
    providers: [EncrDecrService],
    entryComponents: [NewExamComponentsTextareaComponent],
})
export class NewExamModule {}
