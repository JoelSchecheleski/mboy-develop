import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FaturaterceirosComponent} from './faturaterceiros.component';

const routes: Routes = [
    {
        path: '',
        component: FaturaterceirosComponent,

        data: {
            title: 'Faturamento de terceiros',
            icon: 'ti-home',
            caption: 'Faturamento de terceiros',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaturaterceirosRoutingModule {}

