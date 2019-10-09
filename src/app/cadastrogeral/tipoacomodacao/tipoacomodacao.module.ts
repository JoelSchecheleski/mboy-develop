import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TipoacomodacaoComponent} from './tipoacomodacao.component';
import {TipoacomodacaoRoutingModule} from './tipoacomodacao-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TipoacomodacaoRoutingModule,
        TranslateModule
    ],
    declarations: [TipoacomodacaoComponent],
    bootstrap: [TipoacomodacaoComponent]
})
export class TipoacomodacaoModule { }
