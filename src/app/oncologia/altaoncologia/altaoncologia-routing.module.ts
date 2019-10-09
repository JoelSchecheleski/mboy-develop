import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AltaoncologiaComponent} from './altaoncologia.component';

const routes: Routes = [
    {
        path: '',
        component: AltaoncologiaComponent,

        data: {
            title: 'Alta de pacientes da oncologia',
            icon: 'ti-home',
            caption: 'Alta de pacientes da oncologia',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AltaoncologiaRoutingModule {}
