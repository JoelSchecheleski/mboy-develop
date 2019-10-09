import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {MapaleitosComponent} from './mapaleitos.component';

const routes: Routes = [
    {
        path: '',
        component: MapaleitosComponent,

        data: {
            title: 'Mapa de leitos Oncologia/Internação',
            icon: 'ti-home',
            caption: 'Mapa de leitos Oncologia/Internação',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapaleitosRoutingModule {}
