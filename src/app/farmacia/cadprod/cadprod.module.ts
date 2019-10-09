import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CadprodRoutingModule} from './cadprod-routing.module';
import {CadprodComponent} from './cadprod.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CadprodRoutingModule,
        TranslateModule
    ],
    declarations: [CadprodComponent],
    bootstrap: [CadprodComponent]
})
export class CadprodModule { }
