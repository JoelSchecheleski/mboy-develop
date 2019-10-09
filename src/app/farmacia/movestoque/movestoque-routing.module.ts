import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {MovestoqueComponent} from './movestoque.component';

const routes: Routes = [
    {
        path: '',
        component: MovestoqueComponent,

        data: {
            title: 'Movimentação de estoque',
            icon: 'ti-home',
            caption: 'Movimentação de estoque',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovestoqueRoutingModule {}

