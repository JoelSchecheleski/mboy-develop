import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ViasComponent} from './vias.component';

const routes: Routes = [
    {
        path: '',
        component: ViasComponent,

        data: {
            title: 'Vias',
            icon: 'ti-home',
            caption: 'Vias',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViasRoutingModule {}
