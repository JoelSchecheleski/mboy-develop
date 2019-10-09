import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {CustocontautiComponent} from './custocontauti.component';

const routes: Routes = [
    {
        path: '',
        component: CustocontautiComponent,

        data: {
            title: 'Custo dde contas da UTI',
            icon: 'ti-home',
            caption: 'Custo dde contas da UTI',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustocontautiRoutingModule {}

