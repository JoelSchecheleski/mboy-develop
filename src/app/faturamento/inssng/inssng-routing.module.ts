import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {InssngComponent} from './inssng.component';

const routes: Routes = [
    {
        path: '',
        component: InssngComponent,

        data: {
            title: 'INSS NG',
            icon: 'ti-home',
            caption: 'INSS NG',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InssngRoutingModule {}

