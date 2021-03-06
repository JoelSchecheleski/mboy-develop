import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatToolbarModule
} from '@angular/material';

import {ToastrModule} from 'ngx-toastr';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import {LoginComponent} from './login/login.component';
import {ForgotPasswordV2Component} from './forgot-passwordV2/forgot-passwordV2.component';
import {LoginV2Component} from './loginV2/loginV2.component';

import {SessionRoutes} from './session.routing';
import {NzCardModule} from 'ng-zorro-antd';
import {NZ_ICONS} from 'ng-zorro-antd';

import {MaterialSharedModule} from '../modules/material-shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
    declarations: [
        LoginV2Component,
        ForgotPasswordV2Component
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatDividerModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        RouterModule.forChild(SessionRoutes),
        ToastrModule.forRoot(),
        SlickCarouselModule,
        NzCardModule,
        MaterialSharedModule
    ],
    providers: [
        // EcommerceService
    ]
})
export class SessionModule {
}
