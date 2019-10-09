import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SaeComponent} from './sae.component';

const routes: Routes = [
    {
        path: '',
        component: SaeComponent,

        data: {
            title: 'Sistematização da Assistência de Enfermagem (SAE)',
            icon: 'ti-home',
            caption: 'Sistematização da Assistência de Enfermagem (SAE)',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaeRoutingModule {}
