import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelfornecedoresComponent} from './relfornecedores.component';

const routes: Routes = [
    {
        path: '',
        component: RelfornecedoresComponent,

        data: {
            title: 'Relatório de fornecedores',
            icon: 'ti-home',
            caption: 'Relatório de fornecedores',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelfornecedoresRoutingModule {}
