import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { PacienteComponent } from './paciente.component';
import { PacienteRoutingModule } from './paciente-routing.module';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {Button} from 'selenium-webdriver';
import {PacienteDialogComponent} from './paciente-form/paciente-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    Interceptor,
    CommonModule,
    PacienteRoutingModule,
    TranslateModule,
    MaterialSharedModule, // Carrega todos os componentes do MATERIAL
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [PacienteDialogComponent],
  declarations: [PacienteComponent, PacienteDialogComponent],
  bootstrap: [PacienteComponent]
})
export class PacienteModule { }
