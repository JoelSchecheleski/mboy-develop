import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MetodoComponent} from './metodo.component';
import {MetodoRoutingModule} from './metodo-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        MetodoRoutingModule,
        TranslateModule
    ],
    declarations: [MetodoComponent],
    bootstrap: [MetodoComponent]
})
export class MetodoModule { }
