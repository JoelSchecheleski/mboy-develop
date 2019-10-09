import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelmedcontroladoComponent} from './relmedcontrolado.component';

const routes: Routes = [
    {
        path: '',
        component: RelmedcontroladoComponent,

        data: {
            title: 'Relatório de medicamentos controlados',
            icon: 'ti-home',
            caption: 'Relatório de medicamentos controlados',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelmedcontroladoRoutingModule {}

