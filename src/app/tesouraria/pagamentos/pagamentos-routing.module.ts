import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PagamentosComponent} from './pagamentos.component';

const routes: Routes = [
    {
        path: '',
        component: PagamentosComponent,

        data: {
            title: 'Pagamentos de títulos',
            icon: 'ti-home',
            caption: 'Pagamentos de títulos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagamentosRoutingModule {}
