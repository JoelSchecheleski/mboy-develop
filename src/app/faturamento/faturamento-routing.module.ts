import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
    // Módulo de faturamento ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {path: 'preconta', loadChildren: './preconta/preconta.module#PrecontaModule'},
            {path: 'modnota', loadChildren: './modnota/modnota.module#ModnotaModule'},
            {path: 'tesourariafinscal', loadChildren: './tesourariafinscal/tesourariafinscal.module#TesourariafinscalModule'},
            {path: 'notasimples', loadChildren: './notasimples/notasimples.module#NotasimplesModule'},
            {path: 'notafaturamento', loadChildren: './notafaturamento/notafaturamento.module#NotafaturamentoModule'},
            {path: 'digitacaofatura', loadChildren: './digitacaofatura/digitacaofatura.module#DigitacaofaturaModule'},
            {path: 'digitacaocredito', loadChildren: './digitacaocredito/digitacaocredito.module#DigitacaocreditoModule'},
            {path: 'alocred', loadChildren: './alocred/alocred.module#AlocredModule'},
            {path: 'altalocred', loadChildren: './altalocred/altalocred.module#AltalocredModule'},
            {path: 'glosa', loadChildren: './glosa/glosa.module#GlosaModule'},
            {path: 'tabir', loadChildren: './tabir/tabir.module#TabirModule'},
            {path: 'libhono', loadChildren: './libhono/libhono.module#LibhonoModule'},
            {path: 'paghono', loadChildren: './paghono/paghono.module#PaghonoModule'},
            {path: 'lanchono', loadChildren: './lanchono/lanchono.module#LanchonoModule'},
            {path: 'faturaradio', loadChildren: './faturaradio/faturaradio.module#FaturaradioModule'},
            {path: 'faturaterceiros', loadChildren: './faturaterceiros/faturaterceiros.module#FaturaterceirosModule'},
            {path: 'custocontauti', loadChildren: './custocontauti/custocontauti.module#CustocontautiModule'},
            {path: 'inss', loadChildren: './inss/inss.module#InssModule'},
            {path: 'portanes', loadChildren: './portanes/portanes.module#PortanesModule'},
            {path: 'contasps', loadChildren: './contasps/contasps.module#ContaspsModule'},
            {path: 'fechamentoconta', loadChildren: './fechamentoconta/fechamentoconta.module#FechamentocontaModule'},
            {path: 'fechamentopartic', loadChildren: './fechamentopartic/fechamentopartic.module#FechamentoparticModule'},
            {path: 'controleinternacao', loadChildren: './controleinternacao/controleinternacao.module#ControleinternacaoModule'},
            {path: 'faturaconvenio', loadChildren: './faturaconvenio/faturaconvenio.module#FaturaconvenioModule'},
            {path: 'exthono', loadChildren: './exthono/exthono.module#ExthonoModule'},
            {path: 'contaltas', loadChildren: './contaltas/contaltas.module#ContaltasModule'},
            {path: 'relcontas', loadChildren: './relcontas/relcontas.module#RelcontasModule'},
            {path: 'notemitfatur', loadChildren: './notemitfatur/notemitfatur.module#NotemitfaturModule'},
            {path: 'notemitsimples', loadChildren: './notemitsimples/notemitsimples.module#NotemitsimplesModule'},
            {path: 'notaemittesouraria', loadChildren: './notaemittesouraria/notaemittesouraria.module#NotaemittesourariaModule'},
            {path: 'faturaimagem', loadChildren: './faturaimagem/faturaimagem.module#FaturaimagemModule'},
            {path: 'infopaquehono', loadChildren: './infopaquehono/infopaquehono.module#InfopaquehonoModule'},
            {path: 'gastomedic', loadChildren: './gastomedic/gastomedic.module#GastomedicModule'},
            {path: 'excluirfatrx', loadChildren: './excluirfatrx/excluirfatrx.module#ExcluirfatrxModule'},
            {path: 'tiss', loadChildren: './tiss/tiss.module#TissModule'},
            {path: 'relprodambu', loadChildren: './relprodambu/relprodambu.module#RelprodambuModule'},
            {
                path: 'acompcontasfaturamento',
                loadChildren: './acompcontasfaturamento/acompcontasfaturamento.module#AcompcontasfaturamentoModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class FaturamentoRoutingModule {
}
