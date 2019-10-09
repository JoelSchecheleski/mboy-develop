import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EmissaolaudoRoutingModule} from './emissaolaudo-routing.module';
import {EmissaolaudoComponent} from './emissaolaudo.component';


@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EmissaolaudoRoutingModule,
        TranslateModule
    ],
    declarations: [EmissaolaudoComponent],
    bootstrap: [EmissaolaudoComponent]
})
export class EmissaolaudoModule { }
