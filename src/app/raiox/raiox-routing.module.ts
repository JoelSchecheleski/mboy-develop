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
                path: 'exames',
                loadChildren: './exames/exames.module#ExamesModule'
            },
            {
                path: 'consumomaterialrx',
                loadChildren: './consumomaterialrx/consumomaterialrx.module#ConsumomaterialrxModule'
            },
            {
                path: 'emissaolaudo',
                loadChildren: './emissaolaudo/emissaolaudo.module#EmissaolaudoModule'
            },
            {
                path: 'medicosolicitante',
                loadChildren: './medicosolicitante/medicosolicitante.module#MedicosolicitanteModule'
            },
            {
                path: 'modelolaudorx',
                loadChildren: './modelolaudorx/modelolaudorx.module#ModelolaudorxModule'
            },
            {
                path: 'tipoexame',
                loadChildren: './tipoexame/tipoexame.module#TipoexameModule'
            },
            {
                path: 'faturaraiox',
                loadChildren: './faturaraiox/faturaraiox.module#FaturaraioxModule'
            },
            {
                path: 'entregalaudo',
                loadChildren: './entregalaudo/entregalaudo.module#EntregalaudoModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class RaioxRoutingModule { }
