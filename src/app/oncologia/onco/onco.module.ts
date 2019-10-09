import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {OncoRoutingModule} from './onco-routing.module';
import {OncoComponent} from './onco.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        OncoRoutingModule,
        TranslateModule
    ],
    declarations: [OncoComponent],
    bootstrap: [OncoComponent]
})
export class OncoModule { }
