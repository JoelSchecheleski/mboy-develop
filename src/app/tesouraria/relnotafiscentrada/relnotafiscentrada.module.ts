import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelnotafiscentradaComponent} from './relnotafiscentrada.component';
import {RelnotafiscentradaRoutingModule} from './relnotafiscentrada-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelnotafiscentradaRoutingModule,
        TranslateModule
    ],
    declarations: [RelnotafiscentradaComponent],
    bootstrap: [RelnotafiscentradaComponent]
})
export class RelnotafiscentradaModule { }
