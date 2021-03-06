import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {CustomerComponent} from './customer.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CustomerDialogComponent} from './customer-form/customer-dialog.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CustomerRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [CustomerDialogComponent],
    declarations: [CustomerComponent, CustomerDialogComponent],
    bootstrap: [CustomerComponent]
})
export class CustomerModule {
}
