import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SweepstakesReportComponent} from './sweepstakes-report.component';
import {SweepstakesReportRoutingModule} from './sweepstakes-report-routing.module';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SweepstakesReportRoutingModule,
        TranslateModule,
        MaterialSharedModule,
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [SweepstakesReportComponent],
    exports: [
        SweepstakesReportComponent
    ],
    bootstrap: [SweepstakesReportComponent]
})
export class SweepstakesReportModule {
}
