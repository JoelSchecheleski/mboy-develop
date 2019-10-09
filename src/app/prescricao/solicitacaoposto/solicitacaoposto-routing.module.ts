import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SolicitacaopostoComponent} from './solicitacaoposto.component';

const routes: Routes = [
    {
        path: '',
        component: SolicitacaopostoComponent,

        data: {
            title: 'Solicitação de posto',
            icon: 'ti-home',
            caption: 'Solicitação de posto',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SolicitacaopostoRoutingModule {}
