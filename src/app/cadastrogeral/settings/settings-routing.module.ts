import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,

        data: {
            title: 'Tabela de Configuração por hora',
            icon: 'ti-home',
            caption: 'Configuração por horário',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {
}
