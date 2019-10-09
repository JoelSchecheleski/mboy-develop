import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {KitmedicamentosComponent} from './kitmedicamentos.component';

const routes: Routes = [
    {
        path: '',
        component: KitmedicamentosComponent,

        data: {
            title: 'Kits de medicamentos',
            icon: 'ti-home',
            caption: 'Kits de medicamentos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KitmedicamentosRoutingModule {}
