import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelcontasComponent} from './relcontas.component';
import {RelcontasRoutingModule} from './relcontas-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelcontasRoutingModule,
        TranslateModule
    ],
    declarations: [RelcontasComponent],
    bootstrap: [RelcontasComponent]
})
export class RelcontasModule { }
