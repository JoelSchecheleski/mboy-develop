import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AgptitapagarComponent} from './agptitapagar.component';
import {AgptitapagarRoutingModule} from './agptitapagar-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        AgptitapagarRoutingModule,
        TranslateModule
    ],
    declarations: [AgptitapagarComponent],
    bootstrap: [AgptitapagarComponent]
})
export class AgptitapagarModule { }
