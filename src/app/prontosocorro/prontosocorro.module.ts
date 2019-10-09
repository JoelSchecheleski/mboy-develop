import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ProntosocorroRoutingModule} from './prontosocorro-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProntosocorroRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class ProntosocorroModule { }
