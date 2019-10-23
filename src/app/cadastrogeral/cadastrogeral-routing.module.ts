import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';
import {SweepstakesReportComponent} from './sweepstakes-report/sweepstakes-report.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#TablekmModule'
            },
            {
                path: 'motoboy',
                loadChildren: './motoboy/motoboy.module#MotoboyModule'
            },
            {
                path: 'company',
                loadChildren: './company/company.module#CompanyModule'
            },
            {
                path: 'cidades',
                loadChildren: './cidades/cidades.module#CidadesModule'
            },
            {
                path: 'sweepstakes',
                loadChildren: './sweepstakes/sweepstakes.module#SweepstakesModule'
            },
            {
                path: 'sweepstakes-report/:id',
                loadChildren: './sweepstakes-report/sweepstakes-report.module#SweepstakesReportModule'
            },
            {
                path: 'tableKm',
                loadChildren: './tablekm/tablekm.module#TablekmModule'
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class CadastrogeralRoutingModule {
}
