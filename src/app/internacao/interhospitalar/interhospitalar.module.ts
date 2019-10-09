import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {InterhospitalarRoutingModule} from './interhospitalar-routing.module';
import {InterhospitalarComponent} from './interhospitalar.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        InterhospitalarRoutingModule,
        TranslateModule
    ],
    declarations: [InterhospitalarComponent],
    bootstrap: [InterhospitalarComponent]
})
export class InterhospitalarModule { }
