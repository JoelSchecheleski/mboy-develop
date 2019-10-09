import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AlocredComponent} from './alocred.component';
import {AlocredRoutingModule} from './alocred-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AlocredRoutingModule,
        TranslateModule
    ],
    declarations: [AlocredComponent],
    bootstrap: [AlocredComponent]
})
export class AlocredModule { }
