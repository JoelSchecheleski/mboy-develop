import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ContaltasComponent} from './contaltas.component';

const routes: Routes = [
    {
        path: '',
        component: ContaltasComponent,

        data: {
            title: 'Contas alta',
            icon: 'ti-home',
            caption: 'Contas alta',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContaltasRoutingModule {}

