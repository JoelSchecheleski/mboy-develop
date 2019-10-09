import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PagamentosComponent} from './pagamentos.component';
import {PagamentosRoutingModule} from './pagamentos-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PagamentosRoutingModule,
        TranslateModule
    ],
    declarations: [PagamentosComponent],
    bootstrap: [PagamentosComponent]
})
export class PagamentosModule { }
