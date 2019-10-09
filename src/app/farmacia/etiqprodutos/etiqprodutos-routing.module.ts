import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EtiqprodutosComponent} from './etiqprodutos.component';

const routes: Routes = [
    {
        path: '',
        component: EtiqprodutosComponent,

        data: {
            title: 'Etiqueta de medicamentos',
            icon: 'ti-home',
            caption: 'Etiqueta de medicamentos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EtiqprodutosRoutingModule {}
