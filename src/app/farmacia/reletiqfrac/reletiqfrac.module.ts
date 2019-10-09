import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ReletiqfracComponent} from './reletiqfrac.component';
import {ReletiqfracRoutingModule} from './reletiqfrac-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ReletiqfracRoutingModule,
        TranslateModule
    ],
    declarations: [ReletiqfracComponent],
    bootstrap: [ReletiqfracComponent]
})
export class ReletiqfracModule { }
