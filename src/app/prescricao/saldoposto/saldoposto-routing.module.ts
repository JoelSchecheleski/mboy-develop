import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SaldopostoComponent} from './saldoposto.component';

const routes: Routes = [
    {
        path: '',
        component: SaldopostoComponent,

        data: {
            title: 'Saldo de estoque dos postos',
            icon: 'ti-home',
            caption: 'Saldo de estoque dos postos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaldopostoRoutingModule {}
