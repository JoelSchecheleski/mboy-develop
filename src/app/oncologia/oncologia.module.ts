import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {OncologiaRoutingModule} from './oncologia-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OncologiaRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class OncologiaModule { }
