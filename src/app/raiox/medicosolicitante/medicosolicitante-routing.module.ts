import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {MedicosolicitanteComponent} from './medicosolicitante.component';

const routes: Routes = [
    {
        path: '',
        component: MedicosolicitanteComponent,

        data: {
            title: 'Cadastro de Médicos Solicitantes de Raio-X',
            icon: 'ti-home',
            caption: 'Cadastro de Médicos Solicitantes de Raio-X',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicosolicitanteRoutingModule {}
