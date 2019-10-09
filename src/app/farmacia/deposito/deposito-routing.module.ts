import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DepositoComponent} from './deposito.component';

const routes: Routes = [
    {
        path: '',
        component: DepositoComponent,

        data: {
            title: 'Depositos',
            icon: 'ti-home',
            caption: 'Depositos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepositoRoutingModule {}
