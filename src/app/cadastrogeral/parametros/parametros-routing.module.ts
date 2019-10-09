import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ParametrosComponent} from './parametros.component';

const routes: Routes = [
    {
        path: '',
        component: ParametrosComponent,

        data: {
            title: 'Parâmetros gerais do sistema',
            icon: 'ti-home',
            caption: 'Parâmetros gerais do sistema',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParametrosRoutingModule {}
