import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelnotaentradaComponent} from '../../farmacia/relnotaentrada/relnotaentrada.component';
import {TitpagarComponent} from './titpagar.component';

const routes: Routes = [
    {
        path: '',
        component: TitpagarComponent,

        data: {
            title: 'Títulos a pagar',
            icon: 'ti-home',
            caption: 'Títulos a pagar',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TitpagarRoutingModule {}
