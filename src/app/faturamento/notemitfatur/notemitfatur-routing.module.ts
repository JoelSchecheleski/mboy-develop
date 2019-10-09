import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {NotemitfaturComponent} from './notemitfatur.component';

const routes: Routes = [
    {
        path: '',
        component: NotemitfaturComponent,

        data: {
            title: 'Notas fiscais emitidas',
            icon: 'ti-home',
            caption: 'Notas fiscais emitidas',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotemitfaturRoutingModule {}

