import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FaturaterceirosComponent} from './faturaterceiros.component';
import {FaturaterceirosRoutingModule} from './faturaterceiros-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FaturaterceirosRoutingModule,
        TranslateModule
    ],
    declarations: [FaturaterceirosComponent],
    bootstrap: [FaturaterceirosComponent]
})
export class FaturaterceirosModule { }
