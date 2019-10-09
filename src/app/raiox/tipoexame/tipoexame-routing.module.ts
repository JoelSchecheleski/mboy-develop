import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TipoexameComponent} from './tipoexame.component';

const routes: Routes = [
    {
        path: '',
        component: TipoexameComponent,

        data: {
            title: 'Cadastro dos tipos de exames do Raio-X',
            icon: 'ti-home',
            caption: 'Cadastro dos tipos de exames do Raio-X',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoexameRoutingModule {}
