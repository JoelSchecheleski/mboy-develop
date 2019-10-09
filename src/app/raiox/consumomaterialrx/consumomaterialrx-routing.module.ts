import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ConsumomaterialrxComponent} from './consumomaterialrx.component';

const routes: Routes = [
    {
        path: '',
        component: ConsumomaterialrxComponent,

        data: {
            title: 'Consumo de materiais do Raio-X por paciente',
            icon: 'ti-home',
            caption: 'Consumo de materiais do Raio-X por paciente',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumomaterialrxRoutingModule {}
