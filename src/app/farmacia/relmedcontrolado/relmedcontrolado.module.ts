import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelmedcontroladoComponent} from './relmedcontrolado.component';
import {RelmedcontroladoRoutingModule} from './relmedcontrolado-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelmedcontroladoRoutingModule,
        TranslateModule
    ],
    declarations: [RelmedcontroladoComponent],
    bootstrap: [RelmedcontroladoComponent]
})
export class RelmedcontroladoModule { }
