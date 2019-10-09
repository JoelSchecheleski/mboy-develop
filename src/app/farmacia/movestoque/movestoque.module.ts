import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MovestoqueComponent} from './movestoque.component';
import {MovestoqueRoutingModule} from './movestoque-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        MovestoqueRoutingModule,
        TranslateModule
    ],
    declarations: [MovestoqueComponent],
    bootstrap: [MovestoqueComponent]
})
export class MovestoqueModule { }
