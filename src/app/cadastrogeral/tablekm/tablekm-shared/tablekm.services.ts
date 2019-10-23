import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {TablekmModel} from './tablekmModel';
import {Observable} from 'rxjs';
import {Config} from '../../../app-config';

@Injectable()
export class TablekmServices extends ResourceService<TablekmModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'user');
        this.client_http = httpClient;
    }

    public userData(file: any): Observable<any> {
        this.dados = {
            id: file ? file.id : '',
            description: file ? file.description : '',
            additionalValuePerKm: file ? file.additionalValuePerKm : '',
            listRangeSettings: file ? file.listRangeSettings : []
        };

        return this.dados;
    }
}
