import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelforneceComponent} from './relfornece.component';

const routes: Routes = [
    {
        path: '',
        component: RelforneceComponent,

        data: {
            title: 'Relatório de fornecedores',
            icon: 'ti-home',
            caption: 'Relatório de fornecedores',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelforneceRoutingModule {}

