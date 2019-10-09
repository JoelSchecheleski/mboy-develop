import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PrecontaComponent} from './preconta.component';

const routes: Routes = [
    {
        path: '',
        component: PrecontaComponent,

        data: {
            title: 'Pré-conta hospitalar',
            icon: 'ti-home',
            caption: 'Pré-conta hospitalar',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrecontaRoutingModule {}

