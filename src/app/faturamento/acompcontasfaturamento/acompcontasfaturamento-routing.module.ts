import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AcompcontasfaturamentoComponent} from './acompcontasfaturamento.component';

const routes: Routes = [
    {
        path: '',
        component: AcompcontasfaturamentoComponent,

        data: {
            title: 'Acompanhaamento de contas do faturamento',
            icon: 'ti-home',
            caption: 'Acompanhaamento de contas do faturamento',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcompcontasfaturamentoRoutingModule {}

