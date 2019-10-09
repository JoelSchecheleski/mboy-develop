import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {NotasimplesComponent} from './notasimples.component';
import {NotasimplesRoutingModule} from './notasimples-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        NotasimplesRoutingModule,
        TranslateModule
    ],
    declarations: [NotasimplesComponent],
    bootstrap: [NotasimplesComponent]
})
export class NotasimplesModule { }
