import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelconsuinternoComponent} from './relconsuinterno.component';
import {RelconsuinternoRoutingModule} from './relconsuinterno-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelconsuinternoRoutingModule,
        TranslateModule
    ],
    declarations: [RelconsuinternoComponent],
    bootstrap: [RelconsuinternoComponent]
})
export class RelconsuinternoModule { }
