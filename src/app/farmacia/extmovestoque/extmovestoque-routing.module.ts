import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ExtmovestoqueComponent} from './extmovestoque.component';

const routes: Routes = [
    {
        path: '',
        component: ExtmovestoqueComponent,

        data: {
            title: 'Extrato de movimento de estoque',
            icon: 'ti-home',
            caption: 'Extrato de movimento de estoque',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtmovestoqueRoutingModule {}

