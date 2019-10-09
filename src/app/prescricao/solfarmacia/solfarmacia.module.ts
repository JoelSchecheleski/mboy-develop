import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SolfarmaciaComponent} from './solfarmacia.component';
import {SolfarmaciaRoutingModule} from './solfarmacia-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        SolfarmaciaRoutingModule,
        TranslateModule
    ],
    declarations: [SolfarmaciaComponent],
    bootstrap: [SolfarmaciaComponent]
})
export class SolfarmaciaModule { }
