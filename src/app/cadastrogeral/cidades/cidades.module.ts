import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CidadesComponent} from './cidades.component';
import {CidadesRoutingModule} from './cidades-routing.module';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {Button} from 'selenium-webdriver';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PacienteRoutingModule} from '../paciente/paciente-routing.module';
import {PacienteDialogComponent} from '../paciente/paciente-form/paciente-dialog.component';
import {PacienteComponent} from '../paciente/paciente.component';
import {CidadesDialogComponent} from './cidades-form/cidade-dialog.component';

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
        TranslateModule
    ],
    entryComponents: [CidadesDialogComponent],
    declarations: [CidadesComponent, CidadesDialogComponent],
    bootstrap: [CidadesComponent]
})
export class CidadesModule {
}
