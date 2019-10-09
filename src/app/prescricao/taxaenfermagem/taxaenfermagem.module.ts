import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TaxaenfermagemComponent} from './taxaenfermagem.component';
import {TaxaenfermagemRoutingModule} from './taxaenfermagem-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TaxaenfermagemRoutingModule,
        TranslateModule
    ],
    declarations: [TaxaenfermagemComponent],
    bootstrap: [TaxaenfermagemComponent]
})
export class TaxaenfermagemModule { }
