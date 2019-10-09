import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FaturaradioComponent} from './faturaradio.component';

const routes: Routes = [
    {
        path: '',
        component: FaturaradioComponent,

        data: {
            title: 'Faturamento radiologia',
            icon: 'ti-home',
            caption: 'Faturamento radiologia',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaturaradioRoutingModule {}

