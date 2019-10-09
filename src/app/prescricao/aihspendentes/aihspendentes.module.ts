import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AihspendentesComponent} from './aihspendentes.component';
import {AihspendentesRoutingModule} from './aihspendentes-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AihspendentesRoutingModule,
        TranslateModule
    ],
    declarations: [AihspendentesComponent],
    bootstrap: [AihspendentesComponent]
})
export class AihspendentesModule { }
