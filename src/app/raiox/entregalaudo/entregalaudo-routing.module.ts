import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EntregalaudoComponent} from './entregalaudo.component';

const routes: Routes = [
    {
        path: '',
        component: EntregalaudoComponent,

        data: {
            title: 'Entrega de Laudos de Raio-X',
            icon: 'ti-home',
            caption: 'Entrega de Laudos de Raio-X',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntregalaudoRoutingModule {}
