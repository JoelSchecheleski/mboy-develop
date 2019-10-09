import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TabirComponent} from './tabir.component';

const routes: Routes = [
    {
        path: '',
        component: TabirComponent,

        data: {
            title: 'Tabela de imposto de renta %',
            icon: 'ti-home',
            caption: 'Tabela de imposto de renta %',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabirRoutingModule {}

