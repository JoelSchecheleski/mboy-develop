import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {ClaimsComponent} from './claims.component';
import {ClaimsRoutingModule} from './claims-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClaimsDialogComponent} from './claims-form/claims-dialog.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ClaimsRoutingModule,
        TranslateModule,
        MaterialSharedModule,
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [ClaimsDialogComponent],
    declarations: [ClaimsComponent, ClaimsDialogComponent],
    bootstrap: [ClaimsComponent]
})
export class ClaimsModule {
}
