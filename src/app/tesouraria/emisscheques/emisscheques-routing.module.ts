import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EmisschequesComponent} from './emisscheques.component';

const routes: Routes = [
    {
        path: '',
        component: EmisschequesComponent,

        data: {
            title: 'Emissão de cheques',
            icon: 'ti-home',
            caption: 'Emissão de cheques',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmisschequesRoutingModule {}
