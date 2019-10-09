import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ControleinternacaoComponent} from './controleinternacao.component';
import {ControleinternacaoRoutingModule} from './controleinternacao-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ControleinternacaoRoutingModule,
        TranslateModule
    ],
    declarations: [ControleinternacaoComponent],
    bootstrap: [ControleinternacaoComponent]
})
export class ControleinternacaoModule { }
