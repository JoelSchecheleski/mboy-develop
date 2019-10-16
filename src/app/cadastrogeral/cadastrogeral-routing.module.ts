import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

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
                loadChildren: './customer/customer.module#MotoboyModule'
            },
            {
                path: 'motoboy',
                loadChildren: './motoboy/motoboy.module#MotoboyModule'
            },
            {
                path: 'cidades',
                loadChildren: './cidades/cidades.module#CidadesModule'
            },
            {
                path: 'sweepstakes',
                loadChildren: './sweepstakes/sweepstakes.module#SweepstakesModule'
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
