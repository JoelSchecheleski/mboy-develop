import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CidadesComponent} from './cidades.component';
import {CidadesRoutingModule} from './cidades-routing.module';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CidadesDialogComponent} from './cidades-form/cidade-dialog.component';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CidadesRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        TextMaskModule
    ],
    entryComponents: [CidadesDialogComponent],
    declarations: [CidadesComponent, CidadesDialogComponent],
    bootstrap: [CidadesComponent]
})
export class CidadesModule {
}
