import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {CboComponent} from './cbo.component';

const routes: Routes = [
    {
        path: '',
        component: CboComponent,

        data: {
            title: 'Código Brasileiro de Ocupações',
            icon: 'ti-home',
            caption: 'Código Brasileiro de Ocupações',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CboRoutingModule {}
