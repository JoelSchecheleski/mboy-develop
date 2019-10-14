import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [

    // Cadastro geral ================================================================================
    {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'patients',
                loadChildren: './paciente/paciente.module#PacienteModule'
            },
            {
                path: 'cidades',
                loadChildren: './cidades/cidades.module#CidadesModule'
            }
        ]
    }
];

// JB925473301BR
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class CadastrogeralRoutingModule {
}
