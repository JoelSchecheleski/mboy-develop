import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {InfopaquehonoComponent} from './infopaquehono.component';
import {InfopaquehonoRoutingModule} from './infopaquehono-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        InfopaquehonoRoutingModule,
        TranslateModule
    ],
    declarations: [InfopaquehonoComponent],
    bootstrap: [InfopaquehonoComponent]
})
export class InfopaquehonoModule { }
