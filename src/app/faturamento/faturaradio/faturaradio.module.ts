import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FaturaradioComponent} from './faturaradio.component';
import {FaturaradioRoutingModule} from './faturaradio-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FaturaradioRoutingModule,
        TranslateModule
    ],
    declarations: [FaturaradioComponent],
    bootstrap: [FaturaradioComponent]
})
export class FaturaradioModule { }
