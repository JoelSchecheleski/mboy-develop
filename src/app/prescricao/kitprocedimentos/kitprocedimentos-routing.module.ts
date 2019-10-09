import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {KitprocedimentosComponent} from './kitprocedimentos.component';

const routes: Routes = [
    {
        path: '',
        component: KitprocedimentosComponent,

        data: {
            title: 'Kits para procedimentos médicos',
            icon: 'ti-home',
            caption: 'Kits para procedimentos médicos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KitprocedimentosRoutingModule {}
