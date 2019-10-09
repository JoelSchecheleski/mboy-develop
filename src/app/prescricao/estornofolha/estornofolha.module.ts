import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {EstornofolhaRoutingModule} from './estornofolha-routing.module';
import {EstornofolhaComponent} from './estornofolha.component';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        EstornofolhaRoutingModule,
        TranslateModule
    ],
    declarations: [EstornofolhaComponent],
    bootstrap: [EstornofolhaComponent]
})
export class EstornofolhaModule { }
