import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EvolucaoRoutingModule} from './evolucao-routing.module';
import {EvolucaoComponent} from './evolucao.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EvolucaoRoutingModule,
        TranslateModule
    ],
    declarations: [EvolucaoComponent],
    bootstrap: [EvolucaoComponent]
})
export class EvolucaoModule { }
