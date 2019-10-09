import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelnotaentradaComponent} from './relnotaentrada.component';

const routes: Routes = [
    {
        path: '',
        component: RelnotaentradaComponent,

        data: {
            title: 'Relatórios das notas fiscais de entrada',
            icon: 'ti-home',
            caption: 'Relatórios das notas fiscais de entrada',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelnotaentradaRoutingModule {}

