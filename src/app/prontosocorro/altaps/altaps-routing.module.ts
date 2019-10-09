import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AltapsComponent} from './altaps.component';

const routes: Routes = [
    {
        path: '',
        component: AltapsComponent,

        data: {
            title: 'Alta de pacientes do pronto socorro',
            icon: 'ti-home',
            caption: 'Alta de pacientes do pronto socorro',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AltapsRoutingModule {}
