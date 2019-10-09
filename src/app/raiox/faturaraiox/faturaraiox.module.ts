import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FaturaraioxRoutingModule} from './faturaraiox-routing.module';
import {FaturaraioxComponent} from './faturaraiox.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FaturaraioxRoutingModule,
        TranslateModule
    ],
    declarations: [FaturaraioxComponent],
    bootstrap: [FaturaraioxComponent]
})
export class FaturaraioxModule { }
