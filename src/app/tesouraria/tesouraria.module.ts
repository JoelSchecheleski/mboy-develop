import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {TesourariaRoutingModule} from './tesouraria-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TesourariaRoutingModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        TranslateModule
    ]
})
export class TesourariaModule {
}
