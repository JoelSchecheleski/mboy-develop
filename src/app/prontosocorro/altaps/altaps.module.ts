import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AltapsComponent} from './altaps.component';
import {AltapsRoutingModule} from './altaps-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AltapsRoutingModule,
        TranslateModule
    ],
    declarations: [AltapsComponent],
    bootstrap: [AltapsComponent]
})
export class AltapsModule { }
