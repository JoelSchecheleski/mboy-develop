import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TipoexameComponent} from './tipoexame.component';
import {TipoexameRoutingModule} from './tipoexame-routing.module';


@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TipoexameRoutingModule,
        TranslateModule
    ],
    declarations: [TipoexameComponent],
    bootstrap: [TipoexameComponent]
})
export class TipoexameModule { }
