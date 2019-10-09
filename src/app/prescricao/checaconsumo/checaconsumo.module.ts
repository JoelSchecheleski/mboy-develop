import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ChecaconsumoRoutingModule} from './checaconsumo-routing.module';
import {ChecaconsumoComponent} from './checaconsumo.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ChecaconsumoRoutingModule,
        TranslateModule
    ],
    declarations: [ChecaconsumoComponent],
    bootstrap: [ChecaconsumoComponent]
})
export class ChecaconsumoModule { }
