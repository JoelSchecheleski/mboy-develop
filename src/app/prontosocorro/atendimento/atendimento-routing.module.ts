import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AtendimentoComponent} from './atendimento.component';

const routes: Routes = [
    {
        path: '',
        component: AtendimentoComponent,

        data: {
            title: 'Atendimento pronto socorro',
            icon: 'ti-home',
            caption: 'Atendimento pronto socorro',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtendimentoRoutingModule {}
