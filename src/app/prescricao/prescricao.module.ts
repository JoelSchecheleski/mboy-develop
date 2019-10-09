import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {PrescricaoRoutingModule} from './prescricao-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrescricaoRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class PrescricaoModule { }
