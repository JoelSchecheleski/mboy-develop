import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AlocredComponent} from './alocred.component';

const routes: Routes = [
    {
        path: '',
        component: AlocredComponent,

        data: {
            title: 'Alocação de créditos',
            icon: 'ti-home',
            caption: 'Alocação de créditos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlocredRoutingModule {}

