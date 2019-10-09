import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CcihRoutingModule} from './ccih-routing.module';
import {CcihComponent} from './ccih.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CcihRoutingModule,
        TranslateModule
    ],
    declarations: [CcihComponent],
    bootstrap: [CcihComponent]
})
export class CcihModule { }
