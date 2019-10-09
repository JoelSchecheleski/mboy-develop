import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FaturaconvenioComponent} from './faturaconvenio.component';

const routes: Routes = [
    {
        path: '',
        component: FaturaconvenioComponent,

        data: {
            title: 'Faturamento de convênios',
            icon: 'ti-home',
            caption: 'Faturamento de convênios',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaturaconvenioRoutingModule {}

