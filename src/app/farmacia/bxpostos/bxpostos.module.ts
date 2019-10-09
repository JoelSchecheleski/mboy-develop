import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {BxpostosRoutingModule} from './bxpostos-routing.module';
import {BxpostosComponent} from './bxpostos.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        BxpostosRoutingModule,
        TranslateModule
    ],
    declarations: [BxpostosComponent],
    bootstrap: [BxpostosComponent]
})
export class BxpostosModule { }
