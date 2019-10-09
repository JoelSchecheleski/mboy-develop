import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { CadfunComponent } from './cadfun.component';
import { CadfunRoutingModule } from './cadfun-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CadfunRoutingModule,
        TranslateModule
    ],
    declarations: [CadfunComponent],
    bootstrap: [CadfunComponent]
})
export class CadfunModule { }
