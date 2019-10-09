import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FaturaimagemComponent} from './faturaimagem.component';

const routes: Routes = [
    {
        path: '',
        component: FaturaimagemComponent,

        data: {
            title: 'Faturamento imagem',
            icon: 'ti-home',
            caption: 'Faturamento imagem',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaturaimagemRoutingModule {}

