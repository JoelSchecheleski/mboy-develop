import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {TransmedicpostoComponent} from './transmedicposto.component';

const routes: Routes = [
    {
        path: '',
        component: TransmedicpostoComponent,

        data: {
            title: 'Transferência de medicamentos entre postos',
            icon: 'ti-home',
            caption: 'Transferência de medicamentos entre postos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransmedicpostoRoutingModule {}

