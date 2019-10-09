import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SaeComponent} from './sae.component';
import {SaeRoutingModule} from './sae-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SaeRoutingModule,
        TranslateModule
    ],
    declarations: [SaeComponent],
    bootstrap: [SaeComponent]
})
export class SaeModule { }
