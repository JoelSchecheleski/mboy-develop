import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {CidadesComponent} from './cidades.component';

const routes: Routes = [
    {
        path: '',
        component: CidadesComponent,

        data: {
            title: 'Cadastro de cidades e liberação das mesmas',
            icon: 'ti-home',
            caption: 'Liberação de cidades',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CidadesRoutingModule {}
