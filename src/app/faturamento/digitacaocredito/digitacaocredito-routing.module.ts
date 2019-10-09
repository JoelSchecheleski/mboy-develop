import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DigitacaocreditoComponent} from './digitacaocredito.component';

const routes: Routes = [
    {
        path: '',
        component: DigitacaocreditoComponent,

        data: {
            title: 'Digitação de créditos',
            icon: 'ti-home',
            caption: 'Digitação de créditos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DigitacaocreditoRoutingModule {}

