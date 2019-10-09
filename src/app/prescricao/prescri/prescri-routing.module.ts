import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PrescriComponent} from './prescri.component';

const routes: Routes = [
    {
        path: '',
        component: PrescriComponent,

        data: {
            title: 'Cadastro de prescrição médica/oncológica',
            icon: 'ti-home',
            caption: 'Cadastro de prescrição médica/oncológica',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrescriRoutingModule {}
