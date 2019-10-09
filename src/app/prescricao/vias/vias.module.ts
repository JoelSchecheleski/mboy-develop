import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ViasComponent} from './vias.component';
import {ViasRoutingModule} from './vias-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ViasRoutingModule,
        TranslateModule
    ],
    declarations: [ViasComponent],
    bootstrap: [ViasComponent]
})
export class ViasModule { }
