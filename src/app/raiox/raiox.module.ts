import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {RaioxRoutingModule} from './raiox-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RaioxRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class RaioxModule { }
