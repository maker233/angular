import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewExamComponent } from './components/new-exam.component';

const routes: Routes = [{ path: '', component: NewExamComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewExamRoutingModule {}
