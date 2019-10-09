import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {NotemitsimplesComponent} from './notemitsimples.component';

const routes: Routes = [
    {
        path: '',
        component: NotemitsimplesComponent,

        data: {
            title: 'Notas fiscais emitidas (SIMPLES)',
            icon: 'ti-home',
            caption: 'Notas fiscais emitidas (SIMPLES)',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotemitsimplesRoutingModule {}

