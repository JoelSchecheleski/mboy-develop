import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
    // Prescrições médicas em geral ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'prescri',
                loadChildren: './prescri/prescri.module#PrescriModule'
            },
            {
                path: 'atestado',
                loadChildren: './atestado/atestado.module#AtestadoModule'
            },
            {
                path: 'dietas',
                loadChildren: './dietas/dietas.module#DietasModule'
            },
            {
                path: 'visitas',
                loadChildren: './visitas/visitas.module#VisitasModule'
            },
            {
                path: 'transfleito',
                loadChildren: './transfleito/transfleito.module#TransfleitoModule'
            },
            {
                path: 'vias',
                loadChildren: './vias/vias.module#ViasModule'
            },
            {
                path: 'solfarmacia',
                loadChildren: './solfarmacia/solfarmacia.module#SolfarmaciaModule'
            },
            {
                path: 'kitmedicamentos',
                loadChildren: './kitmedicamentos/kitmedicamentos.module#KitmedicamentosModule'
            },
            {
                path: 'kitprocedimentos',
                loadChildren: './kitprocedimentos/kitprocedimentos.module#KitprocedimentosModule'
            },
            {
                path: 'fisioterapia',
                loadChildren: './fisioterapia/fisioterapia.module#FisioterapiaModule'
            },
            {
                path: 'evolenfermagem',
                loadChildren: './evolenfermagem/evolenfermagem.module#EvolenfermagemModule'
            },
            {
                path: 'ecg',
                loadChildren: './ecg/ecg.module#EcgModule'
            },
            {
                path: 'solicitacaoposto',
                loadChildren: './solicitacaoposto/solicitacaoposto.module#SolicitacaopostoModule'
            },
            {
                path: 'horarioaplicacao',
                loadChildren: './horarioaplicacao/horarioaplicacao.module#HorarioaplicacaoModule'
            },
            {
                path: 'protocolos',
                loadChildren: './protocolos/protocolos.module#ProtocolosModule'
            }
            ,
            {
                path: 'taxaenfermagem',
                loadChildren: './taxaenfermagem/taxaenfermagem.module#TaxaenfermagemModule'
            }
            ,
            {
                path: 'cadexamelabor',
                loadChildren: './cadexamelabor/cadexamelabor.module#CadexamelaborModule'
            }
            ,
            {
                path: 'estornofolha',
                loadChildren: './estornofolha/estornofolha.module#EstornofolhaModule'
            }
            ,
            {
                path: 'saldoposto',
                loadChildren: './saldoposto/saldoposto.module#SaldopostoModule'
            }
            ,
            {
                path: 'ccih',
                loadChildren: './ccih/ccih.module#CcihModule'
            }
            ,
            {
                path: 'checaconsumo',
                loadChildren: './checaconsumo/checaconsumo.module#ChecaconsumoModule'
            }
            ,
            {
                path: 'receituario',
                loadChildren: './receituario/receituario.module#ReceituarioModule'
            }
            ,
            {
                path: 'aihspendentes',
                loadChildren: './aihspendentes/aihspendentes.module#AihspendentesModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class PrescricaoRoutingModule {
}
