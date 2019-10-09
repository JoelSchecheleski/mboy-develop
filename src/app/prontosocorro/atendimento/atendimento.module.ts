import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AtendimentoComponent} from './atendimento.component';
import {AtendimentoRoutingModule} from './atendimento-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AtendimentoRoutingModule,
        TranslateModule
    ],
    declarations: [AtendimentoComponent],
    bootstrap: [AtendimentoComponent]
})
export class AtendimentoModule { }
