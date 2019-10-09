import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {GlosaComponent} from './glosa.component';

const routes: Routes = [
    {
        path: '',
        component: GlosaComponent,

        data: {
            title: 'Glosa de valores de contas honorárias',
            icon: 'ti-home',
            caption: 'Glosa de valores de contas honorárias',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlosaRoutingModule {}

