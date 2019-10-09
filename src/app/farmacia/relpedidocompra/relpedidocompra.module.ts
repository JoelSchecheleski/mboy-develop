import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelpedidocompraComponent} from './relpedidocompra.component';
import {RelpedidocompraRoutingModule} from './relpedidocompra-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelpedidocompraRoutingModule,
        TranslateModule
    ],
    declarations: [RelpedidocompraComponent],
    bootstrap: [RelpedidocompraComponent]
})
export class RelpedidocompraModule { }
