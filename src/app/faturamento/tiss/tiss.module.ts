import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TissComponent} from './tiss.component';
import {TissRoutingModule} from './tiss-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TissRoutingModule,
        TranslateModule
    ],
    declarations: [TissComponent],
    bootstrap: [TissComponent]
})
export class TissModule { }
