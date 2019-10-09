import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PrescrioncologiaRoutingModule} from './prescrioncologia-routing.module';
import {PrescrioncologiaComponent} from './prescrioncologia.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PrescrioncologiaRoutingModule,
        TranslateModule
    ],
    declarations: [PrescrioncologiaComponent],
    bootstrap: [PrescrioncologiaComponent]
})
export class PrescrioncologiaModule { }
