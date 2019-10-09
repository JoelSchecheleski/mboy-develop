import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PaghonoComponent} from './paghono.component';
import {PaghonoRoutingModule} from './paghono-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PaghonoRoutingModule,
        TranslateModule
    ],
    declarations: [PaghonoComponent],
    bootstrap: [PaghonoComponent]
})
export class PaghonoModule { }
