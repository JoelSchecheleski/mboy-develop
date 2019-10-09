import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
    // Módulo da internação ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'interhospitalar',
                loadChildren: './interhospitalar/interhospitalar.module#InterhospitalarModule'
            },            {
                path: 'altainternacao',
                loadChildren: './altainternacao/altainternacao.module#AltainternacaoModule'
            },
            {
                path: 'histopaciente',
                loadChildren: './histopaciente/histopaciente.module#HistopacienteModule'
            },
            {
                path: 'trocaleito',
                loadChildren: './trocaleito/trocaleito.module#TrocaleitoModule'
            },
            {
                path: 'controleconta',
                loadChildren: './controleconta/controleconta.module#ControlecontaModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class InternacaoRoutingModule { }
