import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EmissrecibosComponent} from './emissrecibos.component';

const routes: Routes = [
    {
        path: '',
        component: EmissrecibosComponent,

        data: {
            title: 'Emissão de recibos',
            icon: 'ti-home',
            caption: 'Emissão de recibos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmissrecibosRoutingModule {}
