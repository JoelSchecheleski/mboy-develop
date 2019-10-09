import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {CadexamelaborComponent} from './cadexamelabor.component';

const routes: Routes = [
    {
        path: '',
        component: CadexamelaborComponent,

        data: {
            title: 'Cadastro de exames laboratoriais',
            icon: 'ti-home',
            caption: 'Cadastro de exames laboratoriais',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadexamelaborRoutingModule {}
