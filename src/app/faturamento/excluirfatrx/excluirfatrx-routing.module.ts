import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ExcluirfatrxComponent} from './excluirfatrx.component';

const routes: Routes = [
    {
        path: '',
        component: ExcluirfatrxComponent,

        data: {
            title: 'Exclusão de faturas do RAIO-X',
            icon: 'ti-home',
            caption: 'Exclusão de faturas do RAIO-X',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExcluirfatrxRoutingModule {}

