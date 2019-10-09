import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ExtmovestoqueComponent} from './extmovestoque.component';
import {ExtmovestoqueRoutingModule} from './extmovestoque-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ExtmovestoqueRoutingModule,
        TranslateModule
    ],
    declarations: [ExtmovestoqueComponent],
    bootstrap: [ExtmovestoqueComponent]
})
export class ExtmovestoqueModule { }
