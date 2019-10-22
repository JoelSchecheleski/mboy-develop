import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../ResourceService';
import {Observable} from 'rxjs';
import {Config} from '../../app-config';
import {CreditModel} from '../../modules/modelos/creditModel';

@Injectable()
export class CreditService extends ResourceService<CreditModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'user');
        this.client_http = httpClient;
    }

    public creditData(file: any): Observable<any> {
        this.dados = {
            username: file ? file.username : '',
            email: file ? file.email : ''
        };
        return this.dados;
    }

    /**
     * Envia uma cobrança para a vindi, CREDIT_CARD ou BANK_SLIP
     */
    public postCredit(body: any): any {
        const endpoint = new Config().getEndpoint();
        return this.client_http.post(`${endpoint}vindi/bills`, JSON.stringify(body))
            .subscribe(
                data => {
                    return data;
                },
                err => console.error(err)
            );
    }
}
