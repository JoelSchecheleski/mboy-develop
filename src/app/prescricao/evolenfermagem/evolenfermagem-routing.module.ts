import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EvolucaoenfermagemComponent} from '../../prontosocorro/evolucaoenfermagem/evolucaoenfermagem.component';

const routes: Routes = [
    {
        path: '',
        component: EvolucaoenfermagemComponent,

        data: {
            title: 'Evolução da enfermagem',
            icon: 'ti-home',
            caption: 'Evolução da enfermagem',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvolenfermagemRoutingModule {}
