import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {MedurgentesComponent} from './medurgentes.component';

const routes: Routes = [
    {
        path: '',
        component: MedurgentesComponent,

        data: {
            title: 'Baixa de medicamentos urgentes',
            icon: 'ti-home',
            caption: 'Baixa de medicamentos urgentes',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedurgentesRoutingModule {}

