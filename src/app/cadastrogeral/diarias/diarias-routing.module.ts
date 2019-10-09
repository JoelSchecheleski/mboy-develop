import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DiariasComponent} from './diarias.component';

const routes: Routes = [
    {
        path: '',
        component: DiariasComponent,

        data: {
            title: 'Cadastro de diarias por convenio',
            icon: 'ti-home',
            caption: 'Cadastro de diarias por convenio',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiariasRoutingModule {}
