import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelmovestoqueComponent} from './relmovestoque.component';
import {RelmovestoqueRoutingModule} from './relmovestoque-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelmovestoqueRoutingModule,
        TranslateModule
    ],
    declarations: [RelmovestoqueComponent],
    bootstrap: [RelmovestoqueComponent]
})
export class RelmovestoqueModule { }
