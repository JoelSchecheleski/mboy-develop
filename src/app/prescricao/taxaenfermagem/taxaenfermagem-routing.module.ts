import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TaxaenfermagemComponent} from './taxaenfermagem.component';

const routes: Routes = [
    {
        path: '',
        component: TaxaenfermagemComponent,

        data: {
            title: 'Taxa de enfermagem',
            icon: 'ti-home',
            caption: 'Taxa de enfermagem',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaxaenfermagemRoutingModule {}
