import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SolicitacaopostoComponent} from './solicitacaoposto.component';
import {SolicitacaopostoRoutingModule} from './solicitacaoposto-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SolicitacaopostoRoutingModule,
        TranslateModule
    ],
    declarations: [SolicitacaopostoComponent],
    bootstrap: [SolicitacaopostoComponent]
})
export class SolicitacaopostoModule { }
