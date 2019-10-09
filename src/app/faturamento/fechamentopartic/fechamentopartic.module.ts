import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FechamentoparticComponent} from './fechamentopartic.component';
import {FechamentoparticRoutingModule} from './fechamentopartic-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FechamentoparticRoutingModule,
        TranslateModule
    ],
    declarations: [FechamentoparticComponent],
    bootstrap: [FechamentoparticComponent]
})
export class FechamentoparticModule { }
