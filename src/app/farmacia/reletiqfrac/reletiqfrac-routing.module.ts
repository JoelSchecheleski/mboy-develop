import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ReletiqfracComponent} from './reletiqfrac.component';

const routes: Routes = [
    {
        path: '',
        component: ReletiqfracComponent,

        data: {
            title: 'Relatório de etiquetas de materiais',
            icon: 'ti-home',
            caption: 'Relatório de etiquetas de materiais',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReletiqfracRoutingModule {}

