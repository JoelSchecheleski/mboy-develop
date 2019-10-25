/**
 * CRUD do endpoint {{host}}/City
 * @author Joel Schecheleski
 * @date 11/10/2019
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {Observable} from 'rxjs';
import {CityModel} from '../../../modules/modelos/CityModel';

@Injectable()
export class CidadeServices extends ResourceService<CityModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'city');
    }

    /**
     * Estrutura de dados para novo registro
     * @param file
     */
    public cityNewData(file: any): Observable<any> {
        this.dados = {};
        this.dados = {
            id: file ? file.id : '',
            name: file ? file.name : '',
            authorized: file ? file.authorized : '',
            ibgeCode: file ? file.ibgeCode : '',
            zipCodes: file ? file.zipCodes : '',
            state: file ? file.state : ''
        };
        return this.dados;
    }
}


