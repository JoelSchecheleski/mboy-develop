import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ModnotaComponent} from './modnota.component';
import {ModnotaRoutingModule} from './modnota-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ModnotaRoutingModule,
        TranslateModule
    ],
    declarations: [ModnotaComponent],
    bootstrap: [ModnotaComponent]
})
export class ModnotaModule { }
