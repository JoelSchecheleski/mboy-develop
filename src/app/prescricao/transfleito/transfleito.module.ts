import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TransfleitoComponent} from './transfleito.component';
import {TransfleitoRoutingModule} from './transfleito-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TransfleitoRoutingModule,
        TranslateModule
    ],
    declarations: [TransfleitoComponent],
    bootstrap: [TransfleitoComponent]
})
export class TransfleitoModule { }
