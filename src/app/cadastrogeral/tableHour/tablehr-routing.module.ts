import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TablehrComponent} from './tablehr.component';

const routes: Routes = [
    {
        path: '',
        component: TablehrComponent,

        data: {
            title: 'Tabela de Configuração por hora',
            icon: 'ti-home',
            caption: 'Configuração por horário',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablehrRoutingModule {
}
