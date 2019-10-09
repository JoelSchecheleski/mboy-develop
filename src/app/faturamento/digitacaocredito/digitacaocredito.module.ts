import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {DigitacaocreditoComponent} from './digitacaocredito.component';
import {DigitacaocreditoRoutingModule} from './digitacaocredito-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        DigitacaocreditoRoutingModule,
        TranslateModule
    ],
    declarations: [DigitacaocreditoComponent],
    bootstrap: [DigitacaocreditoComponent]
})
export class DigitacaocreditoModule { }
