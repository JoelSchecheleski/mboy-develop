import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {DietasRoutingModule} from './dietas-routing.module';
import {DietasComponent} from './dietas.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        DietasRoutingModule,
        TranslateModule
    ],
    declarations: [DietasComponent],
    bootstrap: [DietasComponent]
})
export class DietasModule { }
