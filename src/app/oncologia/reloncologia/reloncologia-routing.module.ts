import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ReloncologiaComponent} from './reloncologia.component';

const routes: Routes = [
    {
        path: '',
        component: ReloncologiaComponent,

        data: {
            title: 'Relatório da oncologia',
            icon: 'ti-home',
            caption: 'Relatório da oncologia',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReloncologiaRoutingModule {}
