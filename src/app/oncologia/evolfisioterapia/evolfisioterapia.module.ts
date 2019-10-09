import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EvolfisioterapiaComponent} from './evolfisioterapia.component';
import {EvolfisioterapiaRoutingModule} from './evolfisioterapia-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EvolfisioterapiaRoutingModule,
        TranslateModule
    ],
    declarations: [EvolfisioterapiaComponent],
    bootstrap: [EvolfisioterapiaComponent]
})
export class EvolfisioterapiaModule { }
