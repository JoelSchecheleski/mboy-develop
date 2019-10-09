import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DietasComponent} from './dietas.component';

const routes: Routes = [
    {
        path: '',
        component: DietasComponent,

        data: {
            title: 'Controle de dieteas para pacientes',
            icon: 'ti-home',
            caption: 'Controle de dieteas para pacientes',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DietasRoutingModule {}
