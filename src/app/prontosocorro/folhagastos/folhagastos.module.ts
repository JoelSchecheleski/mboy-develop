import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FolhagastosComponent} from './folhagastos.component';
import {FolhagastosRoutingModule} from './folhagastos-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        FolhagastosRoutingModule,
        TranslateModule
    ],
    declarations: [FolhagastosComponent],
    bootstrap: [FolhagastosComponent]
})
export class FolhagastosModule { }
