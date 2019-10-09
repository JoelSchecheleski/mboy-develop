import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {DevmedicamentosRoutingModule} from './devmedicamentos-routing.module';
import {DevmedicamentosComponent} from './devmedicamentos.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        DevmedicamentosRoutingModule,
        TranslateModule
    ],
    declarations: [DevmedicamentosComponent],
    bootstrap: [DevmedicamentosComponent]
})
export class DevmedicamentosModule { }
