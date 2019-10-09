import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {NotemitfaturComponent} from './notemitfatur.component';
import {NotemitfaturRoutingModule} from './notemitfatur-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        NotemitfaturRoutingModule,
        TranslateModule
    ],
    declarations: [NotemitfaturComponent],
    bootstrap: [NotemitfaturComponent]
})
export class NotemitfaturModule { }
