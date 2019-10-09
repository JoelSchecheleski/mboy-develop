import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EvolucaoenfermagemComponent} from './evolucaoenfermagem.component';
import {EvolucaoenfermagemRoutingModule} from './evolucaoenfermagem-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EvolucaoenfermagemRoutingModule,
        TranslateModule
    ],
    declarations: [EvolucaoenfermagemComponent],
    bootstrap: [EvolucaoenfermagemComponent]
})
export class EvolucaoenfermagemModule { }
