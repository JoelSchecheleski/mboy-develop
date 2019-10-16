import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {MotoboyComponent} from './motoboy.component';
import {MotoboyRoutingModule} from './motoboy-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MotoboyDialogComponent} from './motoboy-form/motoboy-dialog.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        MotoboyRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [MotoboyDialogComponent],
    declarations: [MotoboyComponent, MotoboyDialogComponent],
    bootstrap: [MotoboyComponent]
})
export class MotoboyModule {
}
