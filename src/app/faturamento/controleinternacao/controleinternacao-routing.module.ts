import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ControleinternacaoComponent} from './controleinternacao.component';

const routes: Routes = [
    {
        path: '',
        component: ControleinternacaoComponent,

        data: {
            title: 'Controle de internações',
            icon: 'ti-home',
            caption: 'Controle de internações',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ControleinternacaoRoutingModule {}

