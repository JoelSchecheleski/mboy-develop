import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelpsComponent} from './relps.component';

const routes: Routes = [
    {
        path: '',
        component: RelpsComponent,

        data: {
            title: 'Relatório estatísco do Pronto Socorro',
            icon: 'ti-home',
            caption: 'Relatório estatísco do Pronto Socorro',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelpsRoutingModule {}
