import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RequisicoesComponent} from './requisicoes.component';
import {RequisicoesRoutingModule} from './requisicoes-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RequisicoesRoutingModule,
        TranslateModule
    ],
    declarations: [RequisicoesComponent],
    bootstrap: [RequisicoesComponent]
})
export class RequisicoesModule { }
