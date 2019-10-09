import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {PedcomprasComponent} from './pedcompras.component';
import {PedcomprasRoutingModule} from './pedcompras-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PedcomprasRoutingModule,
        TranslateModule
    ],
    declarations: [PedcomprasComponent],
    bootstrap: [PedcomprasComponent]
})
export class PedcomprasModule { }
