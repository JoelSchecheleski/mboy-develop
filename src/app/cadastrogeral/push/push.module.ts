import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Interceptor} from '../../interceptor.module';
import {TranslateModule} from '@ngx-translate/core';
import {PushComponent} from './push.component';
import {PushRoutingModule} from './push-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {MaterialSharedModule} from '../../modules/material-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        Interceptor,
        CommonModule,
        PushRoutingModule,
        TranslateModule,
        MaterialSharedModule,
        AgGridModule.withComponents([]),
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [PushComponent],
    bootstrap: [PushComponent]
})
export class PushModule {
}
