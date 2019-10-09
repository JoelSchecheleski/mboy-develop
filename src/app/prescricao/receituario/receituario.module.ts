import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ReceituarioComponent} from './receituario.component';
import {ReceituarioRoutingModule} from './receituario-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ReceituarioRoutingModule,
        TranslateModule
    ],
    declarations: [ReceituarioComponent],
    bootstrap: [ReceituarioComponent]
})
export class ReceituarioModule { }
