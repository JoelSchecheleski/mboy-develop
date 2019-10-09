import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EvolfisioterapiaComponent} from './evolfisioterapia.component';

const routes: Routes = [
    {
        path: '',
        component: EvolfisioterapiaComponent,

        data: {
            title: 'Evolução de fisioterapia',
            icon: 'ti-home',
            caption: 'Evolução de fisioterapia',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvolfisioterapiaRoutingModule {}
