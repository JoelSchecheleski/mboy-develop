import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EntregalaudoComponent} from './entregalaudo.component';
import {EntregalaudoRoutingModule} from './entregalaudo-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EntregalaudoRoutingModule,
        TranslateModule
    ],
    declarations: [EntregalaudoComponent],
    bootstrap: [EntregalaudoComponent]
})
export class EntregalaudoModule { }
