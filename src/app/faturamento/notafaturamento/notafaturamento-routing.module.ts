import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {NotafaturamentoComponent} from './notafaturamento.component';

const routes: Routes = [
    {
        path: '',
        component: NotafaturamentoComponent,

        data: {
            title: 'Notas fiscais pelo faturamento',
            icon: 'ti-home',
            caption: 'Notas fiscais pelo faturamento',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotafaturamentoRoutingModule {}

