import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {FaturamentoRoutingModule} from './faturamento-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FaturamentoRoutingModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        TranslateModule
    ]
})
export class FaturamentoModule {
}
