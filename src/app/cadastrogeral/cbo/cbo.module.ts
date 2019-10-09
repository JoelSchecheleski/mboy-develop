import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CboComponent} from './cbo.component';
import {CboRoutingModule} from './cbo-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CboRoutingModule,
        TranslateModule
    ],
    declarations: [CboComponent],
    bootstrap: [CboComponent]
})
export class CboModule { }
