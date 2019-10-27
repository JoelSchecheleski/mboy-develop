import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth-service/auth.service';
import {TranslateService} from '@ngx-translate/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

@Component({
    selector: 'ms-forgot-password',
    templateUrl: './forgot-passwordV2-component.html',
    styleUrls: ['./forgot-passwordV2-component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ForgotPasswordV2Component {
    public BaseUrl = new Config().getEndpoint();
    email: string;

    constructor(public authService: AuthService,
                public router: Router,
                private translate: TranslateService,
                private Http: HttpClient) {
    }

    /**
     * send method is used to send a reset password link into your email.
     */
    send(value) {
        if (isNullOrUndefined(value)) {
            Swal.fire({
                title: 'Ops!',
                text: 'É necessário informar um E-Mail para recuperar a senha.',
                imageUrl: '../../assets/warning.svg',
                cancelButtonColor: '#D5652B',
                showCloseButton: true,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
            })
        } else {
            this.recuperar(value);
            this.email = null;
        }
    }

    private recuperar(email: string) {
        return this.Http.post<any>(`${this.BaseUrl}recovery-pass/email`, JSON.stringify({
            email: email
        }))
            .subscribe(response => {
                const retorno = JSON.parse(JSON.stringify(response));
                if (retorno.email != null) {
                    Swal.fire({
                        title: 'Nova senha gerada!',
                        text: 'Acesse sua conta de email e verifique.',
                        imageUrl: '../../assets/sendEmail.svg',
                        cancelButtonColor: '#D5652B',
                        showCloseButton: true,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        animation: false
                    });
                    this.router.navigate(['/session/loginV2']);
                }
            }, error => {
                if (error.status === 0) {
                    Swal.fire({
                        title: 'Server offline!',
                        text: 'O servidor não está disponível.',
                        imageUrl: '../../assets/img/errors/404.svg',
                        cancelButtonColor: '#D5652B',
                        showCloseButton: true,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        animation: false
                    });
                }
            });
    }


}



