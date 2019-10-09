import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FechamentoparticComponent} from './fechamentopartic.component';

const routes: Routes = [
    {
        path: '',
        component: FechamentoparticComponent,

        data: {
            title: 'Fechamento de contas particulares',
            icon: 'ti-home',
            caption: 'Fechamento de contas particulares',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FechamentoparticRoutingModule {}

