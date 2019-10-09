import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TesourariafinscalComponent} from './tesourariafinscal.component';
import {TesourariafinscalRoutingModule} from './tesourariafinscal-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TesourariafinscalRoutingModule,
        TranslateModule
    ],
    declarations: [TesourariafinscalComponent],
    bootstrap: [TesourariafinscalComponent]
})
export class TesourariafinscalModule { }
