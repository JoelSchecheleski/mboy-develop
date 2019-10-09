import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
    // Raio-x ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'onco',
                loadChildren: './onco/onco.module#OncoModule'
            },
            {
                path: 'evenferonco',
                loadChildren: './evenferonco/evenferonco.module#EvenferoncoModule'
            },
            {
                path: 'prescrioncologia',
                loadChildren: './prescrioncologia/prescrioncologia.module#PrescrioncologiaModule'
            },
            {
                path: 'evolucao',
                loadChildren: './evolucao/evolucao.module#EvolucaoModule'
            },
            {
                path: 'mapaleitos',
                loadChildren: './mapaleitos/mapaleitos.module#MapaleitosModule'
            },
            {
                path: 'altaoncologia',
                loadChildren: './altaoncologia/altaoncologia.module#AltaoncologiaModule'
            },
            {
                path: 'prontuariooncologia',
                loadChildren: './prontuariooncologia/prontuariooncologia.module#ProntuariooncologiaModule'
            },
            {
                path: 'reloncologia',
                loadChildren: './reloncologia/reloncologia.module#ReloncologiaModule'
            },
            {
                path: 'evolfisioterapia',
                loadChildren: './evolfisioterapia/evolfisioterapia.module#EvolfisioterapiaModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class OncologiaRoutingModule { }
