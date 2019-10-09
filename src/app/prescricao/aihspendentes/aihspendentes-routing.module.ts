import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AihspendentesComponent} from './aihspendentes.component';

const routes: Routes = [
    {
        path: '',
        component: AihspendentesComponent,

        data: {
            title: 'AIHs pendentes por medicos',
            icon: 'ti-home',
            caption: 'AIHs pendentes por medicos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AihspendentesRoutingModule {}
