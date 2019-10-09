import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AtestadoComponent} from './atestado.component';

const routes: Routes = [
    {
        path: '',
        component: AtestadoComponent,

        data: {
            title: 'Atestado  médico',
            icon: 'ti-home',
            caption: 'Atestado  médico',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtestadoRoutingModule {}
