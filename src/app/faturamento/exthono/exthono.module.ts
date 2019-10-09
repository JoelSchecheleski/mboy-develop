import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ExthonoComponent} from './exthono.component';
import {ExthonoRoutingModule} from './exthono-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ExthonoRoutingModule,
        TranslateModule
    ],
    declarations: [ExthonoComponent],
    bootstrap: [ExthonoComponent]
})
export class ExthonoModule { }
