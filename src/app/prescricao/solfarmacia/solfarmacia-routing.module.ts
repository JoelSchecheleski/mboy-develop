import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SolfarmaciaComponent} from './solfarmacia.component';

const routes: Routes = [
    {
        path: '',
        component: SolfarmaciaComponent,

        data: {
            title: 'Solicitações de farmácia',
            icon: 'ti-home',
            caption: 'Solicitações de farmácia',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SolfarmaciaRoutingModule {}
