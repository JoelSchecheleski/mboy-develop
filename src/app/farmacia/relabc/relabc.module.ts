import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelabcComponent} from './relabc.component';
import {RelabcRoutingModule} from './relabc-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelabcRoutingModule,
        TranslateModule
    ],
    declarations: [RelabcComponent],
    bootstrap: [RelabcComponent]
})
export class RelabcModule { }
