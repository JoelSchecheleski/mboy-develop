import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TabmanchesterComponent} from './tabmanchester.component';
import {TabmanchesterRoutingModule} from './tabmanchester-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        TabmanchesterRoutingModule,
        TranslateModule
    ],
    declarations: [TabmanchesterComponent],
    bootstrap: [TabmanchesterComponent]
})
export class TabmanchesterModule { }
