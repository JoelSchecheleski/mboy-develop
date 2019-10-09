import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {LanchonoComponent} from './lanchono.component';
import {LanchonoRoutingModule} from './lanchono-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        LanchonoRoutingModule,
        TranslateModule
    ],
    declarations: [LanchonoComponent],
    bootstrap: [LanchonoComponent]
})
export class LanchonoModule { }
