import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PorteRoutingModule} from './porte-routing.module';
import {PorteComponent} from './porte.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PorteRoutingModule,
        TranslateModule
    ],
    declarations: [PorteComponent],
    bootstrap: [PorteComponent]
})
export class PorteModule { }
