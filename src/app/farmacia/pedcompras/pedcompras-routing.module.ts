import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PedcomprasComponent} from './pedcompras.component';

const routes: Routes = [
    {
        path: '',
        component: PedcomprasComponent,

        data: {
            title: 'Pedidos de compras',
            icon: 'ti-home',
            caption: 'Pedidos de compras',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedcomprasRoutingModule {}

