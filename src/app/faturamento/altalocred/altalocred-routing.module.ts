import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AltalocredComponent} from './altalocred.component';

const routes: Routes = [
    {
        path: '',
        component: AltalocredComponent,

        data: {
            title: 'Alteração de alocação de créditos',
            icon: 'ti-home',
            caption: 'Alteração de alocação de créditos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AltalocredRoutingModule {}

