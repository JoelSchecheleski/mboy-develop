import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
    // Cadastro geral ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'atendimento',
                loadChildren: './atendimento/atendimento.module#AtendimentoModule'
            },
            {
                path: 'evolucaoenfermagem',
                loadChildren: './evolucaoenfermagem/evolucaoenfermagem.module#EvolucaoenfermagemModule'
            },
            {
                path: 'folhagastos',
                loadChildren: './folhagastos/folhagastos.module#FolhagastosModule'
            },
            {
                path: 'tabmanchester',
                loadChildren: './tabmanchester/tabmanchester.module#TabmanchesterModule'
            },
            {
                path: 'sae',
                loadChildren: './sae/sae.module#SaeModule'
            },
            {
                path: 'saeopcao',
                loadChildren: './saeopcao/saeopcao.module#SaeopcaoModule'
            },
            {
                path: 'altaps',
                loadChildren: './altaps/altaps.module#AltapsModule'
            },
            {
                path: 'relps',
                loadChildren: './relps/relps.module#RelpsModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class ProntosocorroRoutingModule { }
