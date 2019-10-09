import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ExcluirfatrxComponent} from './excluirfatrx.component';
import {ExcluirfatrxRoutingModule} from './excluirfatrx-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ExcluirfatrxRoutingModule,
        TranslateModule
    ],
    declarations: [ExcluirfatrxComponent],
    bootstrap: [ExcluirfatrxComponent]
})
export class ExcluirfatrxModule { }
