import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Interceptor} from '../../interceptor.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ConsumofuncionariosComponent} from './consumofuncionarios.component';
import {ConsumofuncionariosRoutingModule} from './consumofuncionarios-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        ConsumofuncionariosRoutingModule,
        TranslateModule
    ],
    declarations: [ConsumofuncionariosComponent],
    bootstrap: [ConsumofuncionariosComponent]
})
export class ConsumofuncionariosModule { }
