import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelprodambuComponent} from './relprodambu.component';

const routes: Routes = [
    {
        path: '',
        component: RelprodambuComponent,

        data: {
            title: 'Relatório de produção ambulatorial',
            icon: 'ti-home',
            caption: 'Relatório de produção ambulatorial',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelprodambuRoutingModule {}

