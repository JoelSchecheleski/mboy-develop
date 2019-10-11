/**
 * CRUD do endpoint {{host}}/City
 * @author Joel Schecheleski
 * @date 11/10/2019
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CityModel} from '../../../modules/modelos/CityModel';
import {StateModel} from '../../../modules/modelos/stateModel';

@Injectable()
export class CidadeServices extends ResourceService<CityModel> {
    private dados: any;
    private client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'city');
    }

    /**
     * Monta a estrutura de dados de cidades para ser apresentado nos componentes
     * @param file Objeto (registro) selecionado na grid.
     */
    public cityData(file: any): Observable<any> {
        this.dados = {};
        this.dados = {
            id: file ? file.id : '',
            name: file ? file.name : '',
            authorized: file ? file.authorized : '',
            ibgeCode: file ? file.ibgeCode : '',
            zipCodes: file ? file.zipCodes : '',
            state: file ? file.state : {},
        };

        return this.dados;
    }
}


