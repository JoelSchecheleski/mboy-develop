import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EvolucaoenfermagemComponent} from './evolucaoenfermagem.component';

const routes: Routes = [
    {
        path: '',
        component: EvolucaoenfermagemComponent,

        data: {
            title: 'Evolução de pacientes da enfermagem',
            icon: 'ti-home',
            caption: 'Evolução de pacientes da enfermagem',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvolucaoenfermagemRoutingModule {}
