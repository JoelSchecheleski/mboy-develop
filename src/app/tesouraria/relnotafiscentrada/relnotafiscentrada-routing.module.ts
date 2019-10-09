import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelnotafiscentradaComponent} from './relnotafiscentrada.component';

const routes: Routes = [
    {
        path: '',
        component: RelnotafiscentradaComponent,

        data: {
            title: 'Relatório de notas fiscais de entrada',
            icon: 'ti-home',
            caption: 'Relatório de notas fiscais de entrada',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelnotafiscentradaRoutingModule {}
