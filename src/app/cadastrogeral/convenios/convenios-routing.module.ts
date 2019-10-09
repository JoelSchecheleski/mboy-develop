import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { ConveniosComponent } from './convenios.component';

const routes: Routes = [
  {
    path: '',
    component: ConveniosComponent,

    data: {
      title: 'Cadastro de convenios',
      icon: 'ti-home',
      caption: 'Cadastro de convenios',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConveniosRoutingModule {}
