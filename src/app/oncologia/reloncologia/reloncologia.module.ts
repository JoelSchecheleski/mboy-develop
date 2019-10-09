import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ReloncologiaComponent} from './reloncologia.component';
import {ReloncologiaRoutingModule} from './reloncologia-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ReloncologiaRoutingModule,
        TranslateModule
    ],
    declarations: [ReloncologiaComponent],
    bootstrap: [ReloncologiaComponent]
})
export class ReloncologiaModule { }
