import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AtubrasindiceRoutingModule} from './atubrasindice-routing.module';
import {AtubrasindiceComponent} from './atubrasindice.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AtubrasindiceRoutingModule,
        TranslateModule
    ],
    declarations: [AtubrasindiceComponent],
    bootstrap: [AtubrasindiceComponent]
})
export class AtubrasindiceModule { }
