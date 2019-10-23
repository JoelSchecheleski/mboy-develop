import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {TablekmComponent} from './tablekm.component';
import {TablekmRoutingModule} from './tablekm-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TablekmDialogComponent} from './tablekm-form/tablekm-dialog.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TablekmRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [TablekmDialogComponent],
    declarations: [TablekmComponent, TablekmDialogComponent],
    bootstrap: [TablekmComponent]
})
export class TablekmModule {
}
