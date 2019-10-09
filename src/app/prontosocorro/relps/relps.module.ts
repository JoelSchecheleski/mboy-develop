import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {RelpsComponent} from './relps.component';
import {RelpsRoutingModule} from './relps-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        RelpsRoutingModule,
        TranslateModule
    ],
    declarations: [RelpsComponent],
    bootstrap: [RelpsComponent]
})
export class RelpsModule { }
