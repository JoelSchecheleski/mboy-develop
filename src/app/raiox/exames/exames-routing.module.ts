import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ExamesComponent} from './exames.component';

const routes: Routes = [
    {
        path: '',
        component: ExamesComponent,

        data: {
            title: 'Cadastro de exames de Imagem (Raiox-X)',
            icon: 'ti-home',
            caption: 'Cadastro de exames de Imagem (Raiox-X)',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamesRoutingModule {}
