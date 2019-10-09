import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FolhagastosComponent} from './folhagastos.component';

const routes: Routes = [
    {
        path: '',
        component: FolhagastosComponent,

        data: {
            title: 'Folha de gasto com paciente em pronto socorro',
            icon: 'ti-home',
            caption: 'Folha de gasto com paciente em pronto socorro',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FolhagastosRoutingModule {}
