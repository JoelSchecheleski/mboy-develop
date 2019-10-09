import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ProtocolosRoutingModule} from './protocolos-routing.module';
import {ProtocolosComponent} from './protocolos.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ProtocolosRoutingModule,
        TranslateModule
    ],
    declarations: [ProtocolosComponent],
    bootstrap: [ProtocolosComponent]
})
export class ProtocolosModule { }
