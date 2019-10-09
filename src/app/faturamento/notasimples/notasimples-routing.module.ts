import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {NotasimplesComponent} from './notasimples.component';

const routes: Routes = [
    {
        path: '',
        component: NotasimplesComponent,

        data: {
            title: 'Notas fiscais simples',
            icon: 'ti-home',
            caption: 'Notas fiscais simples',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotasimplesRoutingModule {}

