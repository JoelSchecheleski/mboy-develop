import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SweepstakesComponent} from './sweepstakes.component';

const routes: Routes = [
    {
        path: '',
        component: SweepstakesComponent,
        data: {
            title: 'Sorteios realizados',
            icon: 'ti-home',
            caption: 'sorterios',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SweepstakesRoutingModule {}
