import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AltainternacaoRoutingModule} from './altainternacao-routing.module';
import {AltainternacaoComponent} from './altainternacao.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AltainternacaoRoutingModule,
        TranslateModule
    ],
    declarations: [AltainternacaoComponent],
    bootstrap: [AltainternacaoComponent]
})
export class AltainternacaoModule { }
