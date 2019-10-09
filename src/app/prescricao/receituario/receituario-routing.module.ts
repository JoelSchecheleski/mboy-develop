import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ReceituarioComponent} from './receituario.component';

const routes: Routes = [
    {
        path: '',
        component: ReceituarioComponent,

        data: {
            title: 'Receituário',
            icon: 'ti-home',
            caption: 'Receituário',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceituarioRoutingModule {}
