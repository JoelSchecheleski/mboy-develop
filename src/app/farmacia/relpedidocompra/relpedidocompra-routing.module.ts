import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelpedidocompraComponent} from './relpedidocompra.component';

const routes: Routes = [
    {
        path: '',
        component: RelpedidocompraComponent,

        data: {
            title: 'Relatório de pedidos de compras',
            icon: 'ti-home',
            caption: 'Relatório de pedidos de compras',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelpedidocompraRoutingModule {}

