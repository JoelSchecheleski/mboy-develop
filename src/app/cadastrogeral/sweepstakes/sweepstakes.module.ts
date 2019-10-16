import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SweepstakesComponent} from './sweepstakes.component';
import {SweepstakesRoutingModule} from './sweepstakes-routing.module';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SweepstakesDialogComponent} from './sweepstakes-form/sweepstakes-dialog.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SweepstakesRoutingModule,
        TranslateModule,
        MaterialSharedModule,
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    entryComponents: [SweepstakesDialogComponent],
    declarations: [SweepstakesComponent, SweepstakesDialogComponent],
    bootstrap: [SweepstakesComponent]
})
export class SweepstakesModule {
}
