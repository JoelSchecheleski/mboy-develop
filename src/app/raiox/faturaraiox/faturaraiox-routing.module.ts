import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FaturaraioxComponent} from './faturaraiox.component';

const routes: Routes = [
    {
        path: '',
        component: FaturaraioxComponent,

        data: {
            title: 'Faturamento do setor de Raio-X por convenio',
            icon: 'ti-home',
            caption: 'Faturamento do setor de Raio-X por convenio',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaturaraioxRoutingModule {}
