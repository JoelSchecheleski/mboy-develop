import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PrescrioncologiaComponent} from './prescrioncologia.component';

const routes: Routes = [
    {
        path: '',
        component: PrescrioncologiaComponent,

        data: {
            title: 'Prescrição para pacientes da oncologia',
            icon: 'ti-home',
            caption: 'Prescrição para pacientes da oncologia',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrescrioncologiaRoutingModule {}
