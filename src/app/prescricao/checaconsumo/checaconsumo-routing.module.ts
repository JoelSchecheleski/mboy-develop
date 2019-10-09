import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ChecaconsumoComponent} from './checaconsumo.component';

const routes: Routes = [
    {
        path: '',
        component: ChecaconsumoComponent,

        data: {
            title: 'Checagem de consumo de hospitalar',
            icon: 'ti-home',
            caption: 'Checagem de consumo de hospitalar',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChecaconsumoRoutingModule {}
