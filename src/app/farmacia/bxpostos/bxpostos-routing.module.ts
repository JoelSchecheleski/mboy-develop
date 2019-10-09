import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {BxpostosComponent} from './bxpostos.component';

const routes: Routes = [
    {
        path: '',
        component: BxpostosComponent,

        data: {
            title: 'Baixa por posto',
            icon: 'ti-home',
            caption: 'Baixa por posto',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BxpostosRoutingModule {}
