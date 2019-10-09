import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {InternacaoRoutingModule} from './internacao-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InternacaoRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class InternacaoModule { }
