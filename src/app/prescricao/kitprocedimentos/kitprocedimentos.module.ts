import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {KitprocedimentosComponent} from './kitprocedimentos.component';
import {KitprocedimentosRoutingModule} from './kitprocedimentos-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        KitprocedimentosRoutingModule,
        TranslateModule
    ],
    declarations: [KitprocedimentosComponent],
    bootstrap: [KitprocedimentosComponent]
})
export class KitprocedimentosModule { }
