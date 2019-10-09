import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {OncoComponent} from './onco.component';

const routes: Routes = [
    {
        path: '',
        component: OncoComponent,

        data: {
            title: 'Entrada concolígica',
            icon: 'ti-home',
            caption: 'Entrada concolígica',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OncoRoutingModule {}
