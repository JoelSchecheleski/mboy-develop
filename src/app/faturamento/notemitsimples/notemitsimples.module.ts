import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {NotemitsimplesComponent} from './notemitsimples.component';
import {NotemitsimplesRoutingModule} from './notemitsimples-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        NotemitsimplesRoutingModule,
        TranslateModule
    ],
    declarations: [NotemitsimplesComponent],
    bootstrap: [NotemitsimplesComponent]
})
export class NotemitsimplesModule { }
