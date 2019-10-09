import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MapaleitosRoutingModule} from './mapaleitos-routing.module';
import {MapaleitosComponent} from './mapaleitos.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        MapaleitosRoutingModule,
        TranslateModule
    ],
    declarations: [MapaleitosComponent],
    bootstrap: [MapaleitosComponent]
})
export class MapaleitosModule { }
