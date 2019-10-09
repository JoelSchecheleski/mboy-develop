import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {VisitasComponent} from './visitas.component';

const routes: Routes = [
    {
        path: '',
        component: VisitasComponent,

        data: {
            title: 'Controle de visitas para pacientes',
            icon: 'ti-home',
            caption: 'Controle de visitas para pacientes',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VisitasRoutingModule {}
