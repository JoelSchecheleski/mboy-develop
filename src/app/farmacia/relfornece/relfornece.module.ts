import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelforneceComponent} from './relfornece.component';
import {RelforneceRoutingModule} from './relfornece-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelforneceRoutingModule,
        TranslateModule
    ],
    declarations: [RelforneceComponent],
    bootstrap: [RelforneceComponent]
})
export class RelforneceModule { }
