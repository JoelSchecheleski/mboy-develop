import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TablekmComponent} from './tablekm.component';

const routes: Routes = [
    {
        path: '',
        component: TablekmComponent,

        data: {
            title: 'Tabela de Kilometros',
            icon: 'ti-home',
            caption: 'Configuração de Kilometros',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablekmRoutingModule {
}
