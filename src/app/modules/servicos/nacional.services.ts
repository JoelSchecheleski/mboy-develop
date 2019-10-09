/**
 * CRUD do endpoint {{host}}/religiao
 * @author Joel Schecheleski
 * @date 05/05/2019
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResourceService} from '../../ResourceService';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NacionalModel} from '../modelos/nacionalModel';

@Injectable()
export class NacionalServices extends ResourceService<NacionalModel> {
    private dados: any;
    private client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'Nacional');
    }

    /**
     * Monta a estrutura de dados de nacionalidade para ser apresentado nos componentes
     * @param file Objeto (registro) selecionado na grid.
     */
    public nacionalData(file: any): Observable<any> {
        this.dados = {};
        this.dados = {
            id: file ? file.id : '',
            descricao: file ? file.descricao : '',
        };
        return this.dados;
    }
}
