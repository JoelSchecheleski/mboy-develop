import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TabmanchesterComponent} from './tabmanchester.component';

const routes: Routes = [
    {
        path: '',
        component: TabmanchesterComponent,

        data: {
            title: 'Tabela de classificação de risco pelo Manchester',
            icon: 'ti-home',
            caption: 'Tabela de classificação de risco pelo Manchester',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabmanchesterRoutingModule {}
