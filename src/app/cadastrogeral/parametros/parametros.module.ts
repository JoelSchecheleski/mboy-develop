import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ParametrosComponent} from './parametros.component';
import {ParametrosRoutingModule} from './parametros-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ParametrosRoutingModule,
        TranslateModule
    ],
    declarations: [ParametrosComponent],
    bootstrap: [ParametrosComponent]
})
export class ParametrosModule { }
