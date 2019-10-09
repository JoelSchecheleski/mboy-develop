import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {VisitasComponent} from './visitas.component';
import {VisitasRoutingModule} from './visitas-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        VisitasRoutingModule,
        TranslateModule
    ],
    declarations: [VisitasComponent],
    bootstrap: [VisitasComponent]
})
export class VisitasModule { }
