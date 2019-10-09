import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EcgComponent} from './ecg.component';
import {EcgRoutingModule} from './ecg-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EcgRoutingModule,
        TranslateModule
    ],
    declarations: [EcgComponent],
    bootstrap: [EcgComponent]
})
export class EcgModule { }
