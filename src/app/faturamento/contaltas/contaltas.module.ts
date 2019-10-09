import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ContaltasComponent} from './contaltas.component';
import {ContaltasRoutingModule} from './contaltas-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ContaltasRoutingModule,
        TranslateModule
    ],
    declarations: [ContaltasComponent],
    bootstrap: [ContaltasComponent]
})
export class ContaltasModule { }
