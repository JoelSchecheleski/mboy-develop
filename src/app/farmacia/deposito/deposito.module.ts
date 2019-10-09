import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {DepositoComponent} from './deposito.component';
import {DepositoRoutingModule} from './deposito-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        DepositoRoutingModule,
        TranslateModule
    ],
    declarations: [DepositoComponent],
    bootstrap: [DepositoComponent]
})
export class DepositoModule { }
