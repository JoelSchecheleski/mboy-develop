import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ConsumomaterialrxRoutingModule} from './consumomaterialrx-routing.module';
import {ConsumomaterialrxComponent} from './consumomaterialrx.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ConsumomaterialrxRoutingModule,
        TranslateModule
    ],
    declarations: [ConsumomaterialrxComponent],
    bootstrap: [ConsumomaterialrxComponent]
})
export class ConsumomaterialrxModule { }
