import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {GlosaComponent} from './glosa.component';
import {GlosaRoutingModule} from './glosa-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        GlosaRoutingModule,
        TranslateModule
    ],
    declarations: [GlosaComponent],
    bootstrap: [GlosaComponent]
})
export class GlosaModule { }
