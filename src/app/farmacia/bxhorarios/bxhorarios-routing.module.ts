import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {BxhorariosComponent} from './bxhorarios.component';

const routes: Routes = [
    {
        path: '',
        component: BxhorariosComponent,

        data: {
            title: 'Baixa por horário',
            icon: 'ti-home',
            caption: 'Baixa por horário',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BxhorariosRoutingModule {}
