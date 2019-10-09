import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {HistopacienteComponent} from './histopaciente.component';

const routes: Routes = [
    {
        path: '',
        component: HistopacienteComponent,

        data: {
            title: 'Histórico de Pacientes',
            icon: 'ti-home',
            caption: 'Histórico de Pacientes',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HistopacienteRoutingModule {}
