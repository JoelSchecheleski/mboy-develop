import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CustocontautiComponent} from './custocontauti.component';
import {CustocontautiRoutingModule} from './custocontauti-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CustocontautiRoutingModule,
        TranslateModule
    ],
    declarations: [CustocontautiComponent],
    bootstrap: [CustocontautiComponent]
})
export class CustocontautiModule { }
