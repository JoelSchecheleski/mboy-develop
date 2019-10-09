import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {LibhonoComponent} from './libhono.component';

const routes: Routes = [
    {
        path: '',
        component: LibhonoComponent,

        data: {
            title: 'Liberação de honorários médicos',
            icon: 'ti-home',
            caption: 'Liberação de honorários médicos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibhonoRoutingModule {}

