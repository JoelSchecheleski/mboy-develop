import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HistopacienteComponent} from './histopaciente.component';
import {HistopacienteRoutingModule} from './histopaciente-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        HistopacienteRoutingModule,
        TranslateModule
    ],
    declarations: [HistopacienteComponent],
    bootstrap: [HistopacienteComponent]
})
export class HistopacienteModule { }
