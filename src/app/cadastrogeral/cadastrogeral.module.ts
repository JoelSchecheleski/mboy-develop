import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CadastrogeralRoutingModule} from './cadastrogeral-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MaterialSharedModule} from '../modules/material-shared.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialSharedModule,
        CadastrogeralRoutingModule,
        TranslateModule,
        SweetAlert2Module.forRoot()
    ]
})
export class CadastrogeralModule {
}
