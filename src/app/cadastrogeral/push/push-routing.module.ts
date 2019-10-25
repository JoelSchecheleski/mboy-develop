import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PushComponent} from './push.component';

const routes: Routes = [
    {
        path: '',
        component: PushComponent,

        data: {
            title: 'Enviar nova notificação a usuários',
            icon: 'ti-home',
            caption: 'Nova notificação',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PushRoutingModule {
}
