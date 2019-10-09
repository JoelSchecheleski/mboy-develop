import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AltaoncologiaRoutingModule} from './altaoncologia-routing.module';
import {AltaoncologiaComponent} from './altaoncologia.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AltaoncologiaRoutingModule,
        TranslateModule
    ],
    declarations: [AltaoncologiaComponent],
    bootstrap: [AltaoncologiaComponent]
})
export class AltaoncologiaModule { }
