import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AltalocredComponent} from './altalocred.component';
import {AltalocredRoutingModule} from './altalocred-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AltalocredRoutingModule,
        TranslateModule
    ],
    declarations: [AltalocredComponent],
    bootstrap: [AltalocredComponent]
})
export class AltalocredModule { }
