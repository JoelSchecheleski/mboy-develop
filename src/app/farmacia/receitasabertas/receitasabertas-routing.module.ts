import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ReceitasabertasComponent} from './receitasabertas.component';

const routes: Routes = [
    {
        path: '',
        component: ReceitasabertasComponent,

        data: {
            title: 'Receitas em aberto',
            icon: 'ti-home',
            caption: 'Receitas em aberto',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceitasabertasRoutingModule {}

