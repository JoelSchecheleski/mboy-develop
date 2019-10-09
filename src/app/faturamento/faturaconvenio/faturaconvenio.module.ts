import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FaturaconvenioComponent} from './faturaconvenio.component';
import {FaturaconvenioRoutingModule} from './faturaconvenio-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FaturaconvenioRoutingModule,
        TranslateModule
    ],
    declarations: [FaturaconvenioComponent],
    bootstrap: [FaturaconvenioComponent]
})
export class FaturaconvenioModule { }
