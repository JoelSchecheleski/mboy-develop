import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelnotaentradaComponent} from '../../farmacia/relnotaentrada/relnotaentrada.component';
import {ReltitpagarComponent} from './reltitpagar.component';

const routes: Routes = [
    {
        path: '',
        component: ReltitpagarComponent,

        data: {
            title: 'Relatório de títulos a pagar',
            icon: 'ti-home',
            caption: 'Relatório de títulos a pagar',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReltitpagarRoutingModule {}
