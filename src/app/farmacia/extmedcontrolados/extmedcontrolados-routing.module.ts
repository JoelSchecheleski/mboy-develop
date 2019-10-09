import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ExtmedcontroladosComponent} from './extmedcontrolados.component';

const routes: Routes = [
    {
        path: '',
        component: ExtmedcontroladosComponent,

        data: {
            title: 'Extrato de medicamentos controlados',
            icon: 'ti-home',
            caption: 'Extrato de medicamentos controlados',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtmedcontroladosRoutingModule {}

