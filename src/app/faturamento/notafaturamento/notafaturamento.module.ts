import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {NotafaturamentoRoutingModule} from './notafaturamento-routing.module';
import {NotafaturamentoComponent} from './notafaturamento.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        NotafaturamentoRoutingModule,
        TranslateModule
    ],
    declarations: [NotafaturamentoComponent],
    bootstrap: [NotafaturamentoComponent]
})
export class NotafaturamentoModule { }
