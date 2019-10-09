import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TrocaleitoRoutingModule} from './trocaleito-routing.module';
import {TrocaleitoComponent} from './trocaleito.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TrocaleitoRoutingModule,
        TranslateModule
    ],
    declarations: [TrocaleitoComponent],
    bootstrap: [TrocaleitoComponent]
})
export class TrocaleitoModule { }
