import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AtestadoComponent} from './atestado.component';
import {AtestadoRoutingModule} from './atestado-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AtestadoRoutingModule,
        TranslateModule
    ],
    declarations: [AtestadoComponent],
    bootstrap: [AtestadoComponent]
})
export class AtestadoModule { }
