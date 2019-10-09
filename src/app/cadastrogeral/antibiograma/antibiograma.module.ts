import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AntibiogramaComponent} from './antibiograma.component';
import {AntibiogramaRoutingModule} from './antibiograma-routing.module';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {Button} from 'selenium-webdriver';
import {AntibiogramaDialogComponent} from './antibiograma-form/antibiograma-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AntibiogramaRoutingModule,
        TranslateModule,
        MaterialSharedModule, // Carrega todos os componentes do MATERIAL
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
        // SweetAlert2Module
    ],
    entryComponents: [AntibiogramaDialogComponent],
    declarations: [AntibiogramaComponent, AntibiogramaDialogComponent],
    bootstrap: [AntibiogramaComponent]
})
export class AntibiogramaModule { }
