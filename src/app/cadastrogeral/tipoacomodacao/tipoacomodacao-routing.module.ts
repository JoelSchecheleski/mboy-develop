import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TipoacomodacaoComponent} from './tipoacomodacao.component';

const routes: Routes = [
    {
        path: '',
        component: TipoacomodacaoComponent,

        data: {
            title: 'Cadastro de Tipos de Acomodações',
            icon: 'ti-home',
            caption: 'Cadastro de Tipos de Acomodações',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoacomodacaoRoutingModule {}
