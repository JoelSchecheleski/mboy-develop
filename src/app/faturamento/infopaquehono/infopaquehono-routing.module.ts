import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {InfopaquehonoComponent} from './infopaquehono.component';

const routes: Routes = [
    {
        path: '',
        component: InfopaquehonoComponent,

        data: {
            title: 'Informações de pagamentos de honorários',
            icon: 'ti-home',
            caption: 'Informações de pagamentos de honorários',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfopaquehonoRoutingModule {}

