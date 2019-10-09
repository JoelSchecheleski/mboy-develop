import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelhonorariosComponent} from './relhonorarios.component';

const routes: Routes = [
    {
        path: '',
        component: RelhonorariosComponent,

        data: {
            title: 'Relatório de honorários',
            icon: 'ti-home',
            caption: 'Relatório de honorários',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelhonorariosRoutingModule {}

