import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsComponent} from './settings.component';
import {SettingsRoutingModule} from './settings-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SettingsDialogComponent} from './settings-form/settings-dialog.component';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SettingsRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
    ],
    entryComponents: [SettingsDialogComponent],
    declarations: [SettingsComponent, SettingsDialogComponent],
    bootstrap: [SettingsComponent]
})
export class SettingsModule {
}
