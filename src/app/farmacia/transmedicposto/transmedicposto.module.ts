import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TransmedicpostoComponent} from './transmedicposto.component';
import {TransmedicpostoRoutingModule} from './transmedicposto-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TransmedicpostoRoutingModule,
        TranslateModule
    ],
    declarations: [TransmedicpostoComponent],
    bootstrap: [TransmedicpostoComponent]
})
export class TransmedicpostoModule { }
