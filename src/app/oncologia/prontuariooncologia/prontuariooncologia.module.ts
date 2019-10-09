import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ProntuariooncologiaRoutingModule} from './prontuariooncologia-routing.module';
import {ProntuariooncologiaComponent} from './prontuariooncologia.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ProntuariooncologiaRoutingModule,
        TranslateModule
    ],
    declarations: [ProntuariooncologiaComponent],
    bootstrap: [ProntuariooncologiaComponent]
})
export class ProntuariooncologiaModule { }
