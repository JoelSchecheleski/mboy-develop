import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {DigitacaofaturaComponent} from './digitacaofatura.component';
import {DigitacaofaturaRoutingModule} from './digitacaofatura-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        DigitacaofaturaRoutingModule,
        TranslateModule
    ],
    declarations: [DigitacaofaturaComponent],
    bootstrap: [DigitacaofaturaComponent]
})
export class DigitacaofaturaModule { }
