import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TabirComponent} from './tabir.component';
import {TabirRoutingModule} from './tabir-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TabirRoutingModule,
        TranslateModule
    ],
    declarations: [TabirComponent],
    bootstrap: [TabirComponent]
})
export class TabirModule { }
