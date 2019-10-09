import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {GruposubgrupofamiliaComponent} from './gruposubgrupofamilia.component';
import {GruposubgrupofamiliaRoutingModule} from './gruposubgrupofamilia-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        GruposubgrupofamiliaRoutingModule,
        TranslateModule
    ],
    declarations: [GruposubgrupofamiliaComponent],
    bootstrap: [GruposubgrupofamiliaComponent]
})
export class GruposubgrupofamiliaModule { }
