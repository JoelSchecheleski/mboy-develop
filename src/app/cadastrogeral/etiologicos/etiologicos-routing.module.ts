import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EtiologicosComponent} from './etiologicos.component';

const routes: Routes = [
    {
        path: '',
        component: EtiologicosComponent,

        data: {
            title: 'Cadastro de Etiológicos',
            icon: 'ti-home',
            caption: 'Cadastro de Etiológicos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EtiologicosRoutingModule {}
