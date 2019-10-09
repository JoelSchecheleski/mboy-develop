import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelnotaentradaComponent} from './relnotaentrada.component';
import {RelnotaentradaRoutingModule} from './relnotaentrada-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelnotaentradaRoutingModule,
        TranslateModule
    ],
    declarations: [RelnotaentradaComponent],
    bootstrap: [RelnotaentradaComponent]
})
export class RelnotaentradaModule { }
