// @ts-ignore
import {NgModule} from '@angular/core';
// @ts-ignore
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
// @ts-ignore
import {TranslateModule} from '@ngx-translate/core';
import {SettingsComponent} from './settings.component';
import {SettingsRoutingModule} from './settings-routing.module';
// @ts-ignore
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// @ts-ignore
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
    declarations: [SettingsComponent],
    bootstrap: [SettingsComponent]
})
export class SettingsModule {
}
