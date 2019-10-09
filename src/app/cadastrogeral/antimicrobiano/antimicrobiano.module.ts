import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { AntimicrobianoRoutingModule } from './antimicrobiano-routing.module';
import {AntimicrobianoComponent} from './antimicrobiano.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AntimicrobianoRoutingModule,
        TranslateModule
    ],
    declarations: [AntimicrobianoComponent],
    bootstrap: [AntimicrobianoComponent]
})
export class AntimicrobianoModule { }
