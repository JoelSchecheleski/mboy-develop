import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelfornecedoresComponent} from './relfornecedores.component';
import {RelfornecedoresRoutingModule} from './relfornecedores-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelfornecedoresRoutingModule,
        TranslateModule
    ],
    declarations: [RelfornecedoresComponent],
    bootstrap: [RelfornecedoresComponent]
})
export class RelfornecedoresModule { }
