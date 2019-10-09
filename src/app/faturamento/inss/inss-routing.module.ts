import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {InssComponent} from './inss.component';

const routes: Routes = [
    {
        path: '',
        component: InssComponent,

        data: {
            title: 'INSS',
            icon: 'ti-home',
            caption: 'INSS',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InssRoutingModule {}

