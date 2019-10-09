import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ModelolaudorxRoutingModule} from './modelolaudorx-routing.module';
import {ModelolaudorxComponent} from './modelolaudorx.component';


@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ModelolaudorxRoutingModule,
        TranslateModule
    ],
    declarations: [ModelolaudorxComponent],
    bootstrap: [ModelolaudorxComponent]
})
export class ModelolaudorxModule { }
