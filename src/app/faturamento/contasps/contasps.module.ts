import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ContaspsComponent} from './contasps.component';
import {ContaspsRoutingModule} from './contasps-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ContaspsRoutingModule,
        TranslateModule
    ],
    declarations: [ContaspsComponent],
    bootstrap: [ContaspsComponent]
})
export class ContaspsModule { }
