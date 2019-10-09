import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {GastomedicComponent} from './gastomedic.component';
import {GastomedicRoutingModule} from './gastomedic-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        GastomedicRoutingModule,
        TranslateModule
    ],
    declarations: [GastomedicComponent],
    bootstrap: [GastomedicComponent]
})
export class GastomedicModule { }
