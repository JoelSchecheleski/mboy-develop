import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EtiqprodutosRoutingModule} from './etiqprodutos-routing.module';
import {EtiqprodutosComponent} from './etiqprodutos.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EtiqprodutosRoutingModule,
        TranslateModule
    ],
    declarations: [EtiqprodutosComponent],
    bootstrap: [EtiqprodutosComponent]
})
export class EtiqprodutosModule { }
