import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ReceitasabertasComponent} from './receitasabertas.component';
import {ReceitasabertasRoutingModule} from './receitasabertas-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ReceitasabertasRoutingModule,
        TranslateModule
    ],
    declarations: [ReceitasabertasComponent],
    bootstrap: [ReceitasabertasComponent]
})
export class ReceitasabertasModule { }
