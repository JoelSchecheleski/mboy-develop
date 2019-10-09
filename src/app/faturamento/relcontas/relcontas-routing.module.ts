import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelcontasComponent} from './relcontas.component';

const routes: Routes = [
    {
        path: '',
        component: RelcontasComponent,

        data: {
            title: 'Relatório de contas hospitalares',
            icon: 'ti-home',
            caption: 'Relatório de contas hospitalares',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelcontasRoutingModule {}

