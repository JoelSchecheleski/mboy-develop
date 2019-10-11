import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
<<<<<<< HEAD
    // Cadastro geral ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            /* {
                 path: 'patients',
                 loadChildren: './paciente/paciente.module#UserModule'
             },*/{
                path: 'patients',
                loadChildren: './user/user.module#UserModule'
            },
            {
                path: 'convenios',
                loadChildren: './convenios/convenios.module#ConveniosModule'
            },
            {
                path: 'porte',
                loadChildren: './porte/porte.module#PorteModule'
            },
            {
                path: 'cbhpm',
                loadChildren: './cbhpm/cbhpm.module#CbhpmModule'
            },
            {
                path: 'proc-cbhpm-padrao',
                loadChildren: './proc-cbhpm-padrao/proc-cbhpm-padrao.module#ProcCbhpmPadraoModule'
            },
            {
                path: 'cadfun',
                loadChildren: './cadfun/cadfun.module#CadfunModule'
            },
            {
                path: 'sitio',
                loadChildren: './sitio/sitio.module#SitioModule'
            },
            {
                path: 'antimicrobiano',
                loadChildren: './antimicrobiano/antimicrobiano.module#AntimicrobianoModule'
            },
            {
                path: 'etiologicos',
                loadChildren: './etiologicos/etiologicos.module#EtiologicosModule'
            },
            {
                path: 'metodo',
                loadChildren: './metodo/metodo.module#MetodoModule'
            },
            {
                path: 'antibiograma',
                loadChildren: './antibiograma/antibiograma.module#AntibiogramaModule'
            },
            {
                path: 'tipoacomodacao',
                loadChildren: './tipoacomodacao/tipoacomodacao.module#TipoacomodacaoModule'
            },
            {
                path: 'quarto',
                loadChildren: './quarto/quarto.module#QuartoModule'
            },
            {
                path: 'diarias',
                loadChildren: './diarias/diarias.module#DiariasModule'
            },
            {
                path: 'cbo',
                loadChildren: './cbo/cbo.module#CboModule'
            },
            {
                path: 'intersus',
                loadChildren: './intersus/intersus.module#IntersusModule'
            },
            {
                path: 'parametros',
                loadChildren: './parametros/parametros.module#ParametrosModule'
            }
        ]
    }
=======
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
              path: 'patients',
              loadChildren: './paciente/paciente.module#PacienteModule'
          },
          {
              path: 'convenios',
              loadChildren: './convenios/convenios.module#ConveniosModule'
          },
          {
              path: 'cidades',
              loadChildren: './cidades/cidades.module#CidadesModule'
          }
      ]
  }
>>>>>>> 1d297b2979115e974babb9c275e628cf34e1725e
];

// JB925473301BR
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class CadastrogeralRoutingModule {
}
