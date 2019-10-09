import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {MetodoComponent} from './metodo.component';

const routes: Routes = [
    {
        path: '',
        component: MetodoComponent,

        data: {
            title: 'Cadastro de métodos',
            icon: 'ti-home',
            caption: 'Cadastro de métodos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MetodoRoutingModule {}
