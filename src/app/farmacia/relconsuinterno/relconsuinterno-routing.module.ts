import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelconsuinternoComponent} from './relconsuinterno.component';

const routes: Routes = [
    {
        path: '',
        component: RelconsuinternoComponent,

        data: {
            title: 'Relatório de consumo em internaçãoes',
            icon: 'ti-home',
            caption: 'Relatório de consumo em internaçãoes',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelconsuinternoRoutingModule {}

