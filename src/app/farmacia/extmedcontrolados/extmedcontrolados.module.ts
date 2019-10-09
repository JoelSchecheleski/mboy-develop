import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ExtmedcontroladosComponent} from './extmedcontrolados.component';
import {ExtmedcontroladosRoutingModule} from './extmedcontrolados-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ExtmedcontroladosRoutingModule,
        TranslateModule
    ],
    declarations: [ExtmedcontroladosComponent],
    bootstrap: [ExtmedcontroladosComponent]
})
export class ExtmedcontroladosModule { }
