import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EvolenfermagemComponent} from './evolenfermagem.component';
import {EvolucaoenfermagemRoutingModule} from '../../prontosocorro/evolucaoenfermagem/evolucaoenfermagem-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EvolucaoenfermagemRoutingModule,
        TranslateModule
    ],
    declarations: [EvolenfermagemComponent],
    bootstrap: [EvolenfermagemComponent]
})
export class EvolenfermagemModule { }
