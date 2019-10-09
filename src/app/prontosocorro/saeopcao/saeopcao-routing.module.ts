import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SaeopcaoComponent} from './saeopcao.component';

const routes: Routes = [
    {
        path: '',
        component: SaeopcaoComponent,

        data: {
            title: 'Opções de cadastro do Sistematização da Assistência de Enfermagem (SAE)',
            icon: 'ti-home',
            caption: 'Opções de cadastro do Sistematização da Assistência de Enfermagem (SAE)',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaeopcaoRoutingModule {}
