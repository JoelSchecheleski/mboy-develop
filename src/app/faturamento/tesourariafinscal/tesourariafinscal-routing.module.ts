import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TesourariafinscalComponent} from './tesourariafinscal.component';

const routes: Routes = [
    {
        path: '',
        component: TesourariafinscalComponent,

        data: {
            title: 'Notas fiscais tesouraria',
            icon: 'ti-home',
            caption: 'Notas fiscais tesouraria',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TesourariafinscalRoutingModule {}

