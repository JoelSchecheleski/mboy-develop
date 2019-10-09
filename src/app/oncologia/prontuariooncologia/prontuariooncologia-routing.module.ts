import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ProntuariooncologiaComponent} from './prontuariooncologia.component';

const routes: Routes = [
    {
        path: '',
        component: ProntuariooncologiaComponent,

        data: {
            title: 'Prontuário oncológico',
            icon: 'ti-home',
            caption: 'Prontuário oncológico',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProntuariooncologiaRoutingModule {}
