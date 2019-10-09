import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelprodutoComponent} from './relproduto.component';

const routes: Routes = [
    {
        path: '',
        component: RelprodutoComponent,

        data: {
            title: 'Relatório de produtos',
            icon: 'ti-home',
            caption: 'Relatório de produtos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelprodutoRoutingModule {}

