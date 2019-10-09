import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { CbhpmComponent } from './cbhpm.component';

const routes: Routes = [
    {
        path: '',
        component: CbhpmComponent,

        data: {
            title: 'Cadastro CBHPM',
            icon: 'ti-home',
            caption: 'Cadastro CBHPM',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CbhpmRoutingModule {}
