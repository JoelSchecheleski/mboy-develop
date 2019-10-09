import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DcbComponent} from './dcb.component';

const routes: Routes = [
    {
        path: '',
        component: DcbComponent,

        data: {
            title: 'DCB',
            icon: 'ti-home',
            caption: 'DCB',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DcbRoutingModule {}
