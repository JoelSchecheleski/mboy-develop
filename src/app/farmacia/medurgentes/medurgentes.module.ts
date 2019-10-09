import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MedurgentesComponent} from './medurgentes.component';
import {MedurgentesRoutingModule} from './medurgentes-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        MedurgentesRoutingModule,
        TranslateModule
    ],
    declarations: [MedurgentesComponent],
    bootstrap: [MedurgentesComponent]
})
export class MedurgentesModule { }
