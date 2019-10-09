import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {CadprodComponent} from './cadprod.component';

const routes: Routes = [
    {
        path: '',
        component: CadprodComponent,

        data: {
            title: 'Cadastro de produtos',
            icon: 'ti-home',
            caption: 'Cadastro de produtos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadprodRoutingModule {}
