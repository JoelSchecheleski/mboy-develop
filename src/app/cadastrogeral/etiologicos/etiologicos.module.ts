import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EtiologicosComponent} from './etiologicos.component';
import {EtiologicosRoutingModule} from './etiologicos-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EtiologicosRoutingModule,
        TranslateModule
    ],
    declarations: [EtiologicosComponent],
    bootstrap: [EtiologicosComponent]
})
export class EtiologicosModule { }
