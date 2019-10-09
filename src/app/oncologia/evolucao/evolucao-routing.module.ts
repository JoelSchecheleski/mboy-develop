import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EvolucaoComponent} from './evolucao.component';

const routes: Routes = [
    {
        path: '',
        component: EvolucaoComponent,

        data: {
            title: 'Evolução Médica',
            icon: 'ti-home',
            caption: 'Evolução Médica',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvolucaoRoutingModule {}
