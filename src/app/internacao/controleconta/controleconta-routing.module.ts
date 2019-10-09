import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ControlecontaComponent} from './controleconta.component';

const routes: Routes = [
    {
        path: '',
        component: ControlecontaComponent,

        data: {
            title: 'Controle de contas hospitalares',
            icon: 'ti-home',
            caption: 'Controle de contas hospitalares',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ControlecontaRoutingModule {}
