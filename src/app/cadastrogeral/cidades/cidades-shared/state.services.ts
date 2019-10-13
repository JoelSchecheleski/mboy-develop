/**
 * CRUD do endpoint {{host}}/state
 * @author Joel Schecheleski
 * @date 13/10/2019
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CityModel} from '../../../modules/modelos/CityModel';
import {StateModel} from '../../../modules/modelos/stateModel';

@Injectable()
export class StateServices extends ResourceService<StateModel> {
    private dados: any;
    private client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'state');
    }

    /**
     * Monta a estrutura de dados de cidades para ser apresentado nos componentes
     * @param file Objeto (registro) selecionado na grid.
     */
    public stateData(file: any): Observable<any> {
        this.dados = {};
        this.dados = {
            id: file ? file.id : '',
            name: file ? file.name : '',
            abbreviation: file ? file.abbreviation : ''
        };

        return this.dados;
    }
}


