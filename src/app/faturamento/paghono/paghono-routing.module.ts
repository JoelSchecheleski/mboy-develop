import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PaghonoComponent} from './paghono.component';

const routes: Routes = [
    {
        path: '',
        component: PaghonoComponent,

        data: {
            title: 'Pagamentos de honorários',
            icon: 'ti-home',
            caption: 'Pagamentos de honorários',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaghonoRoutingModule {}

