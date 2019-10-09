import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {LibhonoComponent} from './libhono.component';
import {LibhonoRoutingModule} from './libhono-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        LibhonoRoutingModule,
        TranslateModule
    ],
    declarations: [LibhonoComponent],
    bootstrap: [LibhonoComponent]
})
export class LibhonoModule { }
