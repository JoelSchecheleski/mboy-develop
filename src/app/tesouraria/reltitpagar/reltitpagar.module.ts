import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ReltitpagarComponent} from './reltitpagar.component';
import {ReltitpagarRoutingModule} from './reltitpagar-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ReltitpagarRoutingModule,
        TranslateModule
    ],
    declarations: [ReltitpagarComponent],
    bootstrap: [ReltitpagarComponent]
})
export class ReltitpagarModule { }
