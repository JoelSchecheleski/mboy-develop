import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ExamesRoutingModule} from './exames-routing.module';
import {ExamesComponent} from './exames.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ExamesRoutingModule,
        TranslateModule
    ],
    declarations: [ExamesComponent],
    bootstrap: [ExamesComponent]
})
export class ExamesModule { }
