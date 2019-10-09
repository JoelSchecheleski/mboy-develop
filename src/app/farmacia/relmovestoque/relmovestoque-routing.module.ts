import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelmovestoqueComponent} from './relmovestoque.component';

const routes: Routes = [
    {
        path: '',
        component: RelmovestoqueComponent,

        data: {
            title: 'Relatório de movimentação de estoque',
            icon: 'ti-home',
            caption: 'Relatório de movimentação de estoque',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelmovestoqueRoutingModule {}

