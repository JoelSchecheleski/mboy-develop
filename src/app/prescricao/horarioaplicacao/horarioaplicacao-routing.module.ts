import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {HorarioaplicacaoComponent} from './horarioaplicacao.component';

const routes: Routes = [
    {
        path: '',
        component: HorarioaplicacaoComponent,

        data: {
            title: 'Horário de aplicações de medicamentos',
            icon: 'ti-home',
            caption: 'Horário de aplicações de medicamentos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HorarioaplicacaoRoutingModule {}
