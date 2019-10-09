import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ConsulrequisicaoComponent} from './consulrequisicao.component';
import {ConsulrequisicaoRoutingModule} from './consulrequisicao-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ConsulrequisicaoRoutingModule,
        TranslateModule
    ],
    declarations: [ConsulrequisicaoComponent],
    bootstrap: [ConsulrequisicaoComponent]
})
export class ConsulrequisicaoModule { }
