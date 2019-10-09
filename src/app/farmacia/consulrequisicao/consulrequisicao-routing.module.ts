import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ConsulrequisicaoComponent} from './consulrequisicao.component';

const routes: Routes = [
    {
        path: '',
        component: ConsulrequisicaoComponent,

        data: {
            title: 'Consulta de requisiçães',
            icon: 'ti-home',
            caption: 'Consulta de requisiçães',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsulrequisicaoRoutingModule {}
