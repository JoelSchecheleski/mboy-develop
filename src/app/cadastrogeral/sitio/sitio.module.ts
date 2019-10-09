import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SitioRoutingModule} from './sitio-routing.module';
import {SitioComponent} from './sitio.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SitioRoutingModule,
        TranslateModule
    ],
    declarations: [SitioComponent],
    bootstrap: [SitioComponent]
})
export class SitioModule { }
