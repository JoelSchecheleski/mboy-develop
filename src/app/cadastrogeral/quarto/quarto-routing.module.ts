import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {QuartoComponent} from './quarto.component';

const routes: Routes = [
    {
        path: '',
        component: QuartoComponent,

        data: {
            title: 'Cadastro de quartos hospitalares',
            icon: 'ti-home',
            caption: 'Cadastro de quartos hospitalares',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuartoRoutingModule {}
