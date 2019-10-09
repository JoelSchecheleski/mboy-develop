import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as RoleGuard} from '../role-guarde.service';

const routes: Routes = [
    // Módulo da Farmácia ================================================================================
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'consulrequisicao',
                loadChildren: './consulrequisicao/consulrequisicao.module#ConsulrequisicaoModule'
            },
            {
                path: 'devmedicamentos',
                loadChildren: './devmedicamentos/devmedicamentos.module#DevmedicamentosModule'
            },
            {
                path: 'bxhorarios',
                loadChildren: './bxhorarios/bxhorarios.module#BxhorariosModule'
            },
            {
                path: 'bxpostos',
                loadChildren: './bxpostos/bxpostos.module#BxpostosModule'
            },
            {
                path: 'etiqprodutos',
                loadChildren: './etiqprodutos/etiqprodutos.module#EtiqprodutosModule'
            },
            {
                path: 'dcb',
                loadChildren: './dcb/dcb.module#DcbModule'
            },
            {
                path: 'movicontrolados',
                loadChildren: './movicontrolados/movicontrolados.module#MovicontroladosModule'
            },
            {
                path: 'gruposubgrupofamilia',
                loadChildren: './gruposubgrupofamilia/gruposubgrupofamilia.module#GruposubgrupofamiliaModule'
            },
            {
                path: 'deposito',
                loadChildren: './deposito/deposito.module#DepositoModule'
            },
            {
                path: 'unimed',
                loadChildren: './unimed/unimed.module#UnimedModule'
            },
            {
                path: 'cadprod',
                loadChildren: './cadprod/cadprod.module#CadprodModule'
            },
            {
                path: 'notasentrada',
                loadChildren: './notasentrada/notasentrada.module#NotasentradaModule'
            },
            {
                path: 'movestoque',
                loadChildren: './movestoque/movestoque.module#MovestoqueModule'
            },
            {
                path: 'ccusto',
                loadChildren: './ccusto/ccusto.module#CcustoModule'
            },
            {
                path: 'atubrasindice',
                loadChildren: './atubrasindice/atubrasindice.module#AtubrasindiceModule'
            },
            {
                path: 'pedcompras',
                loadChildren: './pedcompras/pedcompras.module#PedcomprasModule'
            },
            {
                path: 'transmedicposto',
                loadChildren: './transmedicposto/transmedicposto.module#TransmedicpostoModule'
            },
            {
                path: 'medurgentes',
                loadChildren: './medurgentes/medurgentes.module#MedurgentesModule'
            },
            {
                path: 'consumofuncionarios',
                loadChildren: './consumofuncionarios/consumofuncionarios.module#ConsumofuncionariosModule'
            },
            {
                path: 'relmedcontrolado',
                loadChildren: './relmedcontrolado/relmedcontrolado.module#RelmedcontroladoModule'
            },
            {
                path: 'relhonorarios',
                loadChildren: './relhonorarios/relhonorarios.module#RelhonorariosModule'
            },
            {
                path: 'reletiqfrac',
                loadChildren: './reletiqfrac/reletiqfrac.module#ReletiqfracModule'
            },
            {
                path: 'relmovestoque',
                loadChildren: './relmovestoque/relmovestoque.module#RelmovestoqueModule'
            },
            {
                path: 'relnotaentrada',
                loadChildren: './relnotaentrada/relnotaentrada.module#RelnotaentradaModule'
            },
            {
                path: 'relpedidocompra',
                loadChildren: './relpedidocompra/relpedidocompra.module#RelpedidocompraModule'
            },
            {
                path: 'relfornece',
                loadChildren: './relfornece/relfornece.module#RelforneceModule'
            },
            {
                path: 'relabc',
                loadChildren: './relabc/relabc.module#RelabcModule'
            },
            {
                path: 'relproduto',
                loadChildren: './relproduto/relproduto.module#RelprodutoModule'
            },
            {
                path: 'relconsuinterno',
                loadChildren: './relconsuinterno/relconsuinterno.module#RelconsuinternoModule'
            },
            {
                path: 'extmovestoque',
                loadChildren: './extmovestoque/extmovestoque.module#ExtmovestoqueModule'
            },
            {
                path: 'extmedcontrolados',
                loadChildren: './extmedcontrolados/extmedcontrolados.module#ExtmedcontroladosModule'
            },
            {
                path: 'receitasabertas',
                loadChildren: './receitasabertas/receitasabertas.module#ReceitasabertasModule'
            },
            {
                path: 'requisicoes',
                loadChildren: './requisicoes/requisicoes.module#RequisicoesModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoleGuard]
})
export class FarmaciaRoutingModule { }
