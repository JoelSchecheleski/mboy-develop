import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FechamentocontaComponent} from './fechamentoconta.component';

const routes: Routes = [
    {
        path: '',
        component: FechamentocontaComponent,

        data: {
            title: 'Fechamento de contas hospitalares',
            icon: 'ti-home',
            caption: 'Fechamento de contas hospitalares',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FechamentocontaRoutingModule {}

