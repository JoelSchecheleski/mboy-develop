import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {InterhospitalarComponent} from './interhospitalar.component';

const routes: Routes = [
    {
        path: '',
        component: InterhospitalarComponent,

        data: {
            title: 'Internação Hhospitalar',
            icon: 'ti-home',
            caption: 'Internação Hhospitalar',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterhospitalarRoutingModule {}
