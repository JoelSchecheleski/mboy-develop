import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HorarioaplicacaoComponent} from './horarioaplicacao.component';
import {HorarioaplicacaoRoutingModule} from './horarioaplicacao-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        HorarioaplicacaoRoutingModule,
        TranslateModule
    ],
    declarations: [HorarioaplicacaoComponent],
    bootstrap: [HorarioaplicacaoComponent]
})
export class HorarioaplicacaoModule { }
