import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { AntimicrobianoComponent } from './antimicrobiano.component';

const routes: Routes = [
    {
        path: '',
        component: AntimicrobianoComponent,

        data: {
            title: 'Cadastro de Antimicrobianos',
            icon: 'ti-home',
            caption: 'Cadastro de Antimicrobianos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AntimicrobianoRoutingModule {}
