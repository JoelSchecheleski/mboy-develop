import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelprodutoComponent} from './relproduto.component';
import {RelprodutoRoutingModule} from './relproduto-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelprodutoRoutingModule,
        TranslateModule
    ],
    declarations: [RelprodutoComponent],
    bootstrap: [RelprodutoComponent]
})
export class RelprodutoModule { }
