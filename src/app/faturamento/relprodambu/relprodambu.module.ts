import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelprodambuComponent} from './relprodambu.component';
import {RelprodambuRoutingModule} from './relprodambu-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelprodambuRoutingModule,
        TranslateModule
    ],
    declarations: [RelprodambuComponent],
    bootstrap: [RelprodambuComponent]
})
export class RelprodambuModule { }
