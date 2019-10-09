import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FechamentocontaComponent} from './fechamentoconta.component';
import {FechamentocontaRoutingModule} from './fechamentoconta-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FechamentocontaRoutingModule,
        TranslateModule
    ],
    declarations: [FechamentocontaComponent],
    bootstrap: [FechamentocontaComponent]
})
export class FechamentocontaModule { }
