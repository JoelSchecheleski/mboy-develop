import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EvenferoncoComponent} from './evenferonco.component';

const routes: Routes = [
    {
        path: '',
        component: EvenferoncoComponent,

        data: {
            title: 'Evolução de enfermagem oncológica',
            icon: 'ti-home',
            caption: 'Evolução de enfermagem oncológica',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvenferoncoRoutingModule {}
