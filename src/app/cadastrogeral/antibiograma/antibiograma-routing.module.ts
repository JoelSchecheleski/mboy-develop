import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AntibiogramaComponent} from './antibiograma.component';

const routes: Routes = [
    {
        path: '',
        component: AntibiogramaComponent,

        data: {
            title: 'Cadastro de antibiograma',
            icon: 'ti-home',
            caption: 'Cadastro de antibiograma',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AntibiogramaRoutingModule {}
