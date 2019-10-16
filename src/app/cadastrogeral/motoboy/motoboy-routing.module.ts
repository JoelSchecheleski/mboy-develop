import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MotoboyComponent} from './motoboy.component';

const routes: Routes = [
    {
        path: '',
        component: MotoboyComponent,

        data: {
            title: 'Cadastro de usuários clientes',
            icon: 'ti-home',
            caption: 'Cadastro de clientes',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MotoboyRoutingModule {
}
