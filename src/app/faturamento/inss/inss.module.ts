import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {InssComponent} from './inss.component';
import {InssRoutingModule} from './inss-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        InssRoutingModule,
        TranslateModule
    ],
    declarations: [InssComponent],
    bootstrap: [InssComponent]
})
export class InssModule { }
