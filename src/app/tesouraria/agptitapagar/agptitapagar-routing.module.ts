import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AgptitapagarComponent} from './agptitapagar.component';

const routes: Routes = [
    {
        path: '',
        component: AgptitapagarComponent,

        data: {
            title: 'Agrupamento de titulos a pagar',
            icon: 'ti-home',
            caption: 'Agrupamento de titulos a pagar',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgptitapagarRoutingModule {}
