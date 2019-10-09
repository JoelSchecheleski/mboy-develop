import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TransfleitoComponent} from './transfleito.component';

const routes: Routes = [
    {
        path: '',
        component: TransfleitoComponent,

        data: {
            title: 'Controle de transferência de leitos',
            icon: 'ti-home',
            caption: 'Controle de transferência de leitos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransfleitoRoutingModule {}
