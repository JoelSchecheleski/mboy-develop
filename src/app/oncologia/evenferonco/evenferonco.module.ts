import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EvenferoncoRoutingModule} from './evenferonco-routing.module';
import {EvenferoncoComponent} from './evenferonco.component';


@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EvenferoncoRoutingModule,
        TranslateModule
    ],
    declarations: [EvenferoncoComponent],
    bootstrap: [EvenferoncoComponent]
})
export class EvenferoncoModule { }
