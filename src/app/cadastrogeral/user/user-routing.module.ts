import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,

        data: {
            title: 'Cadastro de usuários',
            icon: 'ti-home',
            caption: 'Cadastro de usuários',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
