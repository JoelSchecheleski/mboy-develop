import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PorteComponent} from './porte.component';

const routes: Routes = [
    {
        path: '',
        component: PorteComponent,

        data: {
            title: 'Cadastro de porte anestésico',
            icon: 'ti-home',
            caption: 'Cadastro de porte anestésico',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PorteRoutingModule {}
