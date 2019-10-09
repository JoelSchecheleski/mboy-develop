import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {CcustoComponent} from './ccusto.component';

const routes: Routes = [
    {
        path: '',
        component: CcustoComponent,

        data: {
            title: 'Centro de custo',
            icon: 'ti-home',
            caption: 'Centro de custo',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CcustoRoutingModule {}
