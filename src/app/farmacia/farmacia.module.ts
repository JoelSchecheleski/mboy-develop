import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {FarmaciaRoutingModule} from './farmacia-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FarmaciaRoutingModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        TranslateModule
    ]
})
export class FarmaciaModule {
}
