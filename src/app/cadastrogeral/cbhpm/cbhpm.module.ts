import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { CbhpmComponent } from './cbhpm.component';
import { CbhpmRoutingModule } from './cbhpm-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CbhpmRoutingModule,
        TranslateModule
    ],
    declarations: [CbhpmComponent],
    bootstrap: [CbhpmComponent]
})
export class CbhpmModule { }
