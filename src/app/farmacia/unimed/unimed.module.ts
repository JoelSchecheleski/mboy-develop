import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {UnimedComponent} from './unimed.component';
import {UnimedRoutingModule} from './unimed-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        UnimedRoutingModule,
        TranslateModule
    ],
    declarations: [UnimedComponent],
    bootstrap: [UnimedComponent]
})
export class UnimedModule { }
