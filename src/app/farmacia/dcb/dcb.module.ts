import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {DcbRoutingModule} from './dcb-routing.module';
import {DcbComponent} from './dcb.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        DcbRoutingModule,
        TranslateModule
    ],
    declarations: [DcbComponent],
    bootstrap: [DcbComponent]
})
export class DcbModule { }
