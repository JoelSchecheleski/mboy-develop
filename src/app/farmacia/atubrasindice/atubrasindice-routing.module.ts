import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AtubrasindiceComponent} from './atubrasindice.component';

const routes: Routes = [
    {
        path: '',
        component: AtubrasindiceComponent,

        data: {
            title: 'Atualização de preços pelo Brasindice',
            icon: 'ti-home',
            caption: 'Atualização de preços pelo Brasindice',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtubrasindiceRoutingModule {}
