import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../ResourceService';
import {Observable} from 'rxjs';
import {Config} from '../../app-config';

import {EmailModel} from '../../modules/modelos/emailModel';

@Injectable()
export class MailService extends ResourceService<EmailModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'email/simple');
        this.client_http = httpClient;
    }

    public emailData(file: any): Observable<any> {
        this.dados = {
            to: file ? file.security : '',
            subject: file ? file.subject : '',
            content: file ? file.content : '',
            multipart: file ? file.multipart : '',
            html: file ? file.html : '',
        };
        return this.dados;
    }
}



