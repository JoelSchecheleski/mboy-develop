import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EstornofolhaComponent} from './estornofolha.component';

const routes: Routes = [
    {
        path: '',
        component: EstornofolhaComponent,

        data: {
            title: 'Estorno de lancamento na folha de gastos',
            icon: 'ti-home',
            caption: 'Estorno de lancamento na folha de gastos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstornofolhaRoutingModule {}
