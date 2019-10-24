import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {TablehrComponent} from './tablehr.component';
import {TablehrRoutingModule} from './tablehr-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TablehrDialogComponent} from './tablehr-form/tablehr-dialog.component';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TablehrRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
    ],
    entryComponents: [TablehrDialogComponent],
    declarations: [TablehrComponent, TablehrDialogComponent],
    bootstrap: [TablehrComponent]
})
export class TablehrModule {
}
