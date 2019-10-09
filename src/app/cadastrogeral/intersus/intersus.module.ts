import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {IntersusComponent} from './intersus.component';
import {IntersusRoutingModule} from './intersus-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        IntersusRoutingModule,
        TranslateModule
    ],
    declarations: [IntersusComponent],
    bootstrap: [IntersusComponent]
})
export class IntersusModule { }
