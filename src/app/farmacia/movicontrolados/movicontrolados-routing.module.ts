import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {MovicontroladosComponent} from './movicontrolados.component';

const routes: Routes = [
    {
        path: '',
        component: MovicontroladosComponent,

        data: {
            title: 'Movimentação de medicamentos controlados',
            icon: 'ti-home',
            caption: 'Movimentação de medicamentos controlados',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovicontroladosRoutingModule {}

