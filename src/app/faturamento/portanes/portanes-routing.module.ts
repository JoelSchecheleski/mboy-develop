import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PortanesComponent} from './portanes.component';

const routes: Routes = [
    {
        path: '',
        component: PortanesComponent,

        data: {
            title: 'Portes anestésicos',
            icon: 'ti-home',
            caption: 'Portes anestésicos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortanesRoutingModule {}

