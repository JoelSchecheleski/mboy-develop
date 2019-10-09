import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ExthonoComponent} from './exthono.component';

const routes: Routes = [
    {
        path: '',
        component: ExthonoComponent,

        data: {
            title: 'Extorno de honorários médicos',
            icon: 'ti-home',
            caption: 'Extorno de honorários médicos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExthonoRoutingModule {}

