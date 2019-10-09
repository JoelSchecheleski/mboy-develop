import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { ConveniosComponent } from './convenios.component';
import { ConveniosRoutingModule } from './convenios-routing.module';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {Button} from 'selenium-webdriver';
import {ConvenesDialogComponent} from './convenio-form/convenes-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    Interceptor,
    CommonModule,
    ConveniosRoutingModule,
    TranslateModule,
    MaterialSharedModule, // Carrega todos os componentes do MATERIAL
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ConvenesDialogComponent],
  declarations: [ConveniosComponent, ConvenesDialogComponent],
  bootstrap: [ConveniosComponent]
})
export class ConveniosModule { }
