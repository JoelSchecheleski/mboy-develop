import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {CompanyComponent} from './company.component';
import {CompanyRoutingModule} from './company-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CompanyDialogComponent} from './company-form/company-dialog.component';
import { NewCreditComponent } from './company-form/new-credit/new-credit.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CompanyRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [CompanyDialogComponent, NewCreditComponent],
    declarations: [CompanyComponent, CompanyDialogComponent, NewCreditComponent],
    bootstrap: [CompanyComponent]
})
export class CompanyModule {
}
