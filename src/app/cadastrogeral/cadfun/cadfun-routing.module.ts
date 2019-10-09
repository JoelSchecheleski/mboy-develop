import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { CadfunComponent } from './cadfun.component';

const routes: Routes = [
    {
        path: '',
        component: CadfunComponent,

        data: {
            title: 'Cadastro de funcionários do hospital',
            icon: 'ti-home',
            caption: 'Cadastro de funcionários do hospital',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadfunRoutingModule {}
