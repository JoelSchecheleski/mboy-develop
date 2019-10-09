import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {InssngComponent} from './inssng.component';
import {InssngRoutingModule} from './inssng-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        InssngRoutingModule,
        TranslateModule
    ],
    declarations: [InssngComponent],
    bootstrap: [InssngComponent]
})
export class InssngModule { }
