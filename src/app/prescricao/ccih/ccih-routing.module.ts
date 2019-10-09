import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {CcihComponent} from './ccih.component';

const routes: Routes = [
    {
        path: '',
        component: CcihComponent,

        data: {
            title: 'Relatório CCIH',
            icon: 'ti-home',
            caption: 'Relatório CCIH',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CcihRoutingModule {}
