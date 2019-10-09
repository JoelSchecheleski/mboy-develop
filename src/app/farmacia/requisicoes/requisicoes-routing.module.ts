import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RequisicoesComponent} from './requisicoes.component';

const routes: Routes = [
    {
        path: '',
        component: RequisicoesComponent,

        data: {
            title: 'Requisições de medicamentos',
            icon: 'ti-home',
            caption: 'Requisições de medicamentos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequisicoesRoutingModule {}

