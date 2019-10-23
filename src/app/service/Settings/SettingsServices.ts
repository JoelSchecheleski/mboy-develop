import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../ResourceService';
import {Observable} from 'rxjs';
import {Config} from '../../app-config';

import {SettingsModel} from '../../modules/modelos/settingsModel';

@Injectable()
export class SettingsServices extends ResourceService<SettingsModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'config/settings');
        this.client_http = httpClient;
    }

    public settingsData(file: any): Observable<any> {
        this.dados = {
            security: file ? file.security : '',
            appName: file ? file.appName : '',
            creditLimit: file ? file.creditLimit : '',
            cash: file ? file.cash : '',
            bank_slip: file ? file.bank_slip : '',
            credit_card: file ? file.credit_card : '',
            credit: file ? file.credit : '',
            product_mototaxi: file ? file.product_mototaxi : '',
            product_delivery: file ? file.product_delivery : '',
            id_product_mototaxi: file ? file.id_product_mototaxi : '',
            id_product_delivery: file ? file.id_product_delivery : ''
        };
        return this.dados;
    }

    /**
     * Busca todas as configurações do sistema pela api
     */

    public getSettings(): any {
        const endpoint = new Config().getEndpoint();
        return this.client_http.get(`${endpoint}config/settings`, {responseType: 'json'})
            .map(value => {
                return value;
            });
    }

    // public getSettings(): any {
    //     const endpoint = new Config().getEndpoint();
    //     return this.client_http.get(`${endpoint}config/settings`)
    //         .subscribe(
    //             data => {
    //                 return data;
    //                 console.log(data);
    //             },
    //             err => console.error(err)
    //         );
    // }
}
