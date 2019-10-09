import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {DiariasComponent} from './diarias.component';
import {DiariasRoutingModule} from './diarias-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        DiariasRoutingModule,
        TranslateModule
    ],
    declarations: [DiariasComponent],
    bootstrap: [DiariasComponent]
})
export class DiariasModule { }
