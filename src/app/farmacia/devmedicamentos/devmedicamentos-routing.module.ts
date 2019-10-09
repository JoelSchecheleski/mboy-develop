import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DevmedicamentosComponent} from './devmedicamentos.component';

const routes: Routes = [
    {
        path: '',
        component: DevmedicamentosComponent,

        data: {
            title: 'Devolução de medicamentos',
            icon: 'ti-home',
            caption: 'Devolução de medicamentos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DevmedicamentosRoutingModule {}
