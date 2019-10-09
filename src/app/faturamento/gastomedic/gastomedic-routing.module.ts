import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {GastomedicComponent} from './gastomedic.component';

const routes: Routes = [
    {
        path: '',
        component: GastomedicComponent,

        data: {
            title: 'Gastos com medicamentos',
            icon: 'ti-home',
            caption: 'Gastos com medicamentos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GastomedicRoutingModule {}

