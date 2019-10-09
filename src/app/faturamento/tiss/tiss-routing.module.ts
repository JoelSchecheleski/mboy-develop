import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TissComponent} from './tiss.component';

const routes: Routes = [
    {
        path: '',
        component: TissComponent,

        data: {
            title: 'Faturamento entre convênios pelo TISS',
            icon: 'ti-home',
            caption: 'Faturamento entre convênios pelo TISS',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TissRoutingModule {}

