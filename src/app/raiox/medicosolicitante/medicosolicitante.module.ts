import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MedicosolicitanteRoutingModule} from './medicosolicitante-routing.module';
import {MedicosolicitanteComponent} from './medicosolicitante.component';


@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        MedicosolicitanteRoutingModule,
        TranslateModule
    ],
    declarations: [MedicosolicitanteComponent],
    bootstrap: [MedicosolicitanteComponent]
})
export class MedicosolicitanteModule { }
