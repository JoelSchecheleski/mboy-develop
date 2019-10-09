import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {GruposubgrupofamiliaComponent} from './gruposubgrupofamilia.component';

const routes: Routes = [
    {
        path: '',
        component: GruposubgrupofamiliaComponent,

        data: {
            title: 'Grupo/subgrupo/família',
            icon: 'ti-home',
            caption: 'Grupo/subgrupo/família',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GruposubgrupofamiliaRoutingModule {}

