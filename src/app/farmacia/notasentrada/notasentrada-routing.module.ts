import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelnotaentradaComponent} from '../relnotaentrada/relnotaentrada.component';

const routes: Routes = [
    {
        path: '',
        component: RelnotaentradaComponent,

        data: {
            title: 'Digitação de notas de entrada',
            icon: 'ti-home',
            caption: 'Digitação de notas de entrada',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotasentradaRoutingModule {}

