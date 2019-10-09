import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TrocaleitoComponent} from './trocaleito.component';

const routes: Routes = [
    {
        path: '',
        component: TrocaleitoComponent,

        data: {
            title: 'Troca leito do paciente internado',
            icon: 'ti-home',
            caption: 'Troca leito do paciente internado',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrocaleitoRoutingModule {}
