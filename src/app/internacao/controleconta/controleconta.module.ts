import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ControlecontaRoutingModule} from './controleconta-routing.module';
import {ControlecontaComponent} from './controleconta.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ControlecontaRoutingModule,
        TranslateModule
    ],
    declarations: [ControlecontaComponent],
    bootstrap: [ControlecontaComponent]
})
export class ControlecontaModule { }
