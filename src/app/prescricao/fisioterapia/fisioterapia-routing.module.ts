import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FisioterapiaComponent} from './fisioterapia.component';

const routes: Routes = [
    {
        path: '',
        component: FisioterapiaComponent,

        data: {
            title: 'Evolução da fisioterapia',
            icon: 'ti-home',
            caption: 'Evolução da fisioterapia',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FisioterapiaRoutingModule {}
