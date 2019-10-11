import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CidadesComponent} from './cidades.component';
import {CidadesRoutingModule} from './cidades-routing.module';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        CidadesRoutingModule,
        TranslateModule
    ],
    declarations: [CidadesComponent],
    bootstrap: [CidadesComponent]
})
export class CidadesModule { }
