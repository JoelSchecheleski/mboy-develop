import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SaldopostoRoutingModule} from './saldoposto-routing.module';
import {SaldopostoComponent} from './saldoposto.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SaldopostoRoutingModule,
        TranslateModule
    ],
    declarations: [SaldopostoComponent],
    bootstrap: [SaldopostoComponent]
})
export class SaldopostoModule { }
