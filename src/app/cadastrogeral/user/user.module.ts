import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {UserComponent} from './user.component';
import {UserRoutingModule} from './user-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserDialogComponent} from './user-form/user-dialog.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        UserRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [UserDialogComponent],
    declarations: [UserComponent, UserDialogComponent],
    bootstrap: [UserComponent]
})
export class UserModule {
}
