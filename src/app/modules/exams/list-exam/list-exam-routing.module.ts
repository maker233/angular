import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListExamComponent } from './components/list-exam.component';

const routes: Routes = [{ path: '', component: ListExamComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListExamRoutingModule {}
