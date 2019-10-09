import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SitioComponent} from './sitio.component';

const routes: Routes = [
    {
        path: '',
        component: SitioComponent,

        data: {
            title: 'Cadastro de Sítios hospitalares',
            icon: 'ti-home',
            caption: 'Cadastro de Sítios hospitalares',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitioRoutingModule {}
