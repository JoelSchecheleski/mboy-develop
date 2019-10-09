import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {QuartoComponent} from './quarto.component';
import {QuartoRoutingModule} from './quarto-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        QuartoRoutingModule,
        TranslateModule
    ],
    declarations: [QuartoComponent],
    bootstrap: [QuartoComponent]
})
export class QuartoModule { }
