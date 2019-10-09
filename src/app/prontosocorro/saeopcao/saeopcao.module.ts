import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SaeopcaoComponent} from './saeopcao.component';
import {SaeopcaoRoutingModule} from './saeopcao-routing.module';


@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SaeopcaoRoutingModule,
        TranslateModule
    ],
    declarations: [SaeopcaoComponent],
    bootstrap: [SaeopcaoComponent]
})
export class SaeopcaoModule { }

