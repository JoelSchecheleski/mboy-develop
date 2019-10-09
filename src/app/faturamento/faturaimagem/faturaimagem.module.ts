import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FaturaimagemComponent} from './faturaimagem.component';
import {FaturaimagemRoutingModule} from './faturaimagem-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FaturaimagemRoutingModule,
        TranslateModule
    ],
    declarations: [FaturaimagemComponent],
    bootstrap: [FaturaimagemComponent]
})
export class FaturaimagemModule { }
