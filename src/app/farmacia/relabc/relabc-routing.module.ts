import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {RelabcComponent} from './relabc.component';

const routes: Routes = [
    {
        path: '',
        component: RelabcComponent,

        data: {
            title: 'Curva ABC de produtos',
            icon: 'ti-home',
            caption: 'Curva ABC de produtos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelabcRoutingModule {}

