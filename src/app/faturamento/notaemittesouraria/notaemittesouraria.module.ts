import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {NotaemittesourariaComponent} from './notaemittesouraria.component';
import {NotaemittesourariaRoutingModule} from './notaemittesouraria-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        NotaemittesourariaRoutingModule,
        TranslateModule
    ],
    declarations: [NotaemittesourariaComponent],
    bootstrap: [NotaemittesourariaComponent]
})
export class NotaemittesourariaModule { }
