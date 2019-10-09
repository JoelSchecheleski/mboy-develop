import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CadexamelaborComponent} from './cadexamelabor.component';
import {CadexamelaborRoutingModule} from './cadexamelabor-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CadexamelaborRoutingModule,
        TranslateModule
    ],
    declarations: [CadexamelaborComponent],
    bootstrap: [CadexamelaborComponent]
})
export class CadexamelaborModule { }
