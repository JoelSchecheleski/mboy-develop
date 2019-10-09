import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {KitmedicamentosComponent} from './kitmedicamentos.component';
import {KitmedicamentosRoutingModule} from './kitmedicamentos-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        KitmedicamentosRoutingModule,
        TranslateModule
    ],
    declarations: [KitmedicamentosComponent],
    bootstrap: [KitmedicamentosComponent]
})
export class KitmedicamentosModule { }
