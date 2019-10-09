import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EmisschequesComponent} from './emisscheques.component';
import {EmisschequesRoutingModule} from './emisscheques-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EmisschequesRoutingModule,
        TranslateModule
    ],
    declarations: [EmisschequesComponent],
    bootstrap: [EmisschequesComponent]
})
export class EmisschequesModule { }
