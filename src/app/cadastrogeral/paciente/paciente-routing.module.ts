import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { PacienteComponent } from './paciente.component';

const routes: Routes = [
  {
    path: '',
    component: PacienteComponent,

    data: {
      title: 'Cadastro de pacientes',
      icon: 'ti-home',
      caption: 'Cadastro de pacientes',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule {}
