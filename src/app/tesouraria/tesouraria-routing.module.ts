import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
    // Módulo da tesouraria ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'titpagar',
                loadChildren: './titpagar/titpagar.module#TitpagarModule'
            },
            {
                path: 'pagamentos',
                loadChildren: './pagamentos/pagamentos.module#PagamentosModule'
            },
            {
                path: 'agptitapagar',
                loadChildren: './agptitapagar/agptitapagar.module#AgptitapagarModule'
            },
            {
                path: 'emisscheques',
                loadChildren: './emisscheques/emisscheques.module#EmisschequesModule'
            },
            {
                path: 'emissrecibos',
                loadChildren: './emissrecibos/emissrecibos.module#EmissrecibosModule'
            },
            {
                path: 'relfornecedores',
                loadChildren: './relfornecedores/relfornecedores.module#RelfornecedoresModule'
            },
            {
                path: 'relnotafiscentrada',
                loadChildren: './relnotafiscentrada/relnotafiscentrada.module#RelnotafiscentradaModule'
            },
            {
                path: 'reltitpagar',
                loadChildren: './reltitpagar/reltitpagar.module#ReltitpagarModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class TesourariaRoutingModule {
}
