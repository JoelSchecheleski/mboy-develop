
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AcompcontasfaturamentoComponent} from './acompcontasfaturamento.component';
import {AcompcontasfaturamentoRoutingModule} from './acompcontasfaturamento-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AcompcontasfaturamentoRoutingModule,
        TranslateModule
    ],
    declarations: [AcompcontasfaturamentoComponent],
    bootstrap: [AcompcontasfaturamentoComponent]
})
export class AcompcontasfaturamentoModule { }
