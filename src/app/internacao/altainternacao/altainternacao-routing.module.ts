import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AltainternacaoComponent} from './altainternacao.component';

const routes: Routes = [
    {
        path: '',
        component: AltainternacaoComponent,

        data: {
            title: 'Alta da Internação Hhospitalar',
            icon: 'ti-home',
            caption: 'Alta da Internação Hhospitalar',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AltainternacaoRoutingModule {}
