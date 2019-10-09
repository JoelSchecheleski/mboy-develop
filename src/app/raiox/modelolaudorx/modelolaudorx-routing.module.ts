import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ModelolaudorxComponent} from './modelolaudorx.component';

const routes: Routes = [
    {
        path: '',
        component: ModelolaudorxComponent,

        data: {
            title: 'Cadastro de modelos de Laudos do Raio-X',
            icon: 'ti-home',
            caption: 'Cadastro de modelos de Laudos do Raio-X',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModelolaudorxRoutingModule {}
