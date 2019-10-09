import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EmissaolaudoComponent} from './emissaolaudo.component';

const routes: Routes = [
    {
        path: '',
        component: EmissaolaudoComponent,

        data: {
            title: 'Emissão de Laudos de Raio-X por paciente',
            icon: 'ti-home',
            caption: 'Emissão de Laudos de Raio-X por paciente',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmissaolaudoRoutingModule {}
