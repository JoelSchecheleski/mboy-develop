import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelhonorariosComponent} from './relhonorarios.component';
import {RelhonorariosRoutingModule} from './relhonorarios-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelhonorariosRoutingModule,
        TranslateModule
    ],
    declarations: [RelhonorariosComponent],
    bootstrap: [RelhonorariosComponent]
})
export class RelhonorariosModule { }
