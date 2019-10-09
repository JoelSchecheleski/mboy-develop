import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TitpagarComponent} from './titpagar.component';
import {TitpagarRoutingModule} from './titpagar-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TitpagarRoutingModule,
        TranslateModule
    ],
    declarations: [TitpagarComponent],
    bootstrap: [TitpagarComponent]
})
export class TitpagarModule { }
