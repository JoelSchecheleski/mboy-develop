import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EmissrecibosComponent} from './emissrecibos.component';
import {EmissrecibosRoutingModule} from './emissrecibos-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EmissrecibosRoutingModule,
        TranslateModule
    ],
    declarations: [EmissrecibosComponent],
    bootstrap: [EmissrecibosComponent]
})
export class EmissrecibosModule { }
