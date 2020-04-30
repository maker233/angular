import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { AuthGuard } from '../../shared/auth/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('../home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'logout',
                loadChildren: () =>
                    import('../auth/logout/logout.module').then(
                        (m) => m.LogoutModule
                    ),
            },
            {
                path: 'exams/new',
                loadChildren: () =>
                    import('../exams/new-exam/new-exam.module').then(
                        (m) => m.NewExamModule
                    ),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
