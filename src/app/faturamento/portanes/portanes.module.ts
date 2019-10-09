import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PortanesComponent} from './portanes.component';
import {PortanesRoutingModule} from './portanes-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PortanesRoutingModule,
        TranslateModule
    ],
    declarations: [PortanesComponent],
    bootstrap: [PortanesComponent]
})
export class PortanesModule { }
