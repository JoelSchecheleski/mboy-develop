import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ProcCbhpmPadraoRoutingModule} from './proc-cbhpm-padrao-routing.module';
import {ProcCbhpmPadraoComponent} from './proc-cbhpm-padrao.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ProcCbhpmPadraoRoutingModule,
        TranslateModule
    ],
    declarations: [ProcCbhpmPadraoComponent],
    bootstrap: [ProcCbhpmPadraoComponent]
})
export class ProcCbhpmPadraoModule { }
