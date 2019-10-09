import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {BxhorariosRoutingModule} from './bxhorarios-routing.module';
import {BxhorariosComponent} from './bxhorarios.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        BxhorariosRoutingModule,
        TranslateModule
    ],
    declarations: [BxhorariosComponent],
    bootstrap: [BxhorariosComponent]
})
export class BxhorariosModule { }
