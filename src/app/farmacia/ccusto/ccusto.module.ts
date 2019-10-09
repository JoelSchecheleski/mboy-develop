import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CcustoRoutingModule} from './ccusto-routing.module';
import {CcustoComponent} from './ccusto.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CcustoRoutingModule,
        TranslateModule
    ],
    declarations: [CcustoComponent],
    bootstrap: [CcustoComponent]
})
export class CcustoModule { }
