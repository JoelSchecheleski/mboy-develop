import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DigitacaofaturaComponent} from './digitacaofatura.component';

const routes: Routes = [
    {
        path: '',
        component: DigitacaofaturaComponent,

        data: {
            title: 'Digitação de faturas',
            icon: 'ti-home',
            caption: 'Digitação de faturas',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DigitacaofaturaRoutingModule {}

