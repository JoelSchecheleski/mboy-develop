import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SweepstakesReportComponent} from './sweepstakes-report.component';

const routes: Routes = [
    {
        path: '',
        component: SweepstakesReportComponent,
        data: {
            title: 'Relatório de sorteio',
            icon: 'ti',
            caption: 'sorterios',
            status: false,
            value: ''
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SweepstakesReportRoutingModule {}
