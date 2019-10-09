import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ConsumofuncionariosComponent} from './consumofuncionarios.component';

const routes: Routes = [
    {
        path: '',
        component: ConsumofuncionariosComponent,

        data: {
            title: 'Consumo interno por funcionarios',
            icon: 'ti-home',
            caption: 'Consumo interno por funcionarios',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumofuncionariosRoutingModule {}
