import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FisioterapiaComponent} from './fisioterapia.component';
import {FisioterapiaRoutingModule} from './fisioterapia-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FisioterapiaRoutingModule,
        TranslateModule
    ],
    declarations: [FisioterapiaComponent],
    bootstrap: [FisioterapiaComponent]
})
export class FisioterapiaModule { }
