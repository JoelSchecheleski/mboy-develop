import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './company.component';


const routes: Routes = [
    {
        path: '',
        component: CompanyComponent,

        data: {
            title: 'Cadastro de usuários clientes',
            icon: 'ti-home',
            caption: 'Cadastro de clientes',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {
}
