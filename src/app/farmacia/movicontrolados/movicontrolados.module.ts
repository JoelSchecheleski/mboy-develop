import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MovicontroladosComponent} from './movicontrolados.component';
import {MovicontroladosRoutingModule} from './movicontrolados-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        MovicontroladosRoutingModule,
        TranslateModule
    ],
    declarations: [MovicontroladosComponent],
    bootstrap: [MovicontroladosComponent]
})
export class MovicontroladosModule { }
