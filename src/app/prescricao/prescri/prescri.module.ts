import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PrescriComponent} from './prescri.component';
import {PrescriRoutingModule} from './prescri-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PrescriRoutingModule,
        TranslateModule
    ],
    declarations: [PrescriComponent],
    bootstrap: [PrescriComponent]
})
export class PrescriModule { }
