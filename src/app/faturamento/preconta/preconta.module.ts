import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PrecontaComponent} from './preconta.component';
import {PrecontaRoutingModule} from './preconta-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PrecontaRoutingModule,
        TranslateModule
    ],
    declarations: [PrecontaComponent],
    bootstrap: [PrecontaComponent]
})
export class PrecontaModule { }
