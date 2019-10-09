import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {LanchonoComponent} from './lanchono.component';

const routes: Routes = [
    {
        path: '',
        component: LanchonoComponent,

        data: {
            title: 'Lançamentos de honorários',
            icon: 'ti-home',
            caption: 'Lançamentos de honorários',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LanchonoRoutingModule {}

