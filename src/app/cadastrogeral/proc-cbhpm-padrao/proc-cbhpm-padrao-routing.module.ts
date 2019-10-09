import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ProcCbhpmPadraoComponent} from './proc-cbhpm-padrao.component';

const routes: Routes = [
    {
        path: '',
        component: ProcCbhpmPadraoComponent,

        data: {
            title: 'Cadastro de Procedimentos CHBPM Padrão',
            icon: 'ti-home',
            caption: 'Cadastro de Procedimentos CHBPM Padrão',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcCbhpmPadraoRoutingModule {}
