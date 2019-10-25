/**
 * CRUD do endpoint {{host}}/push
 * @author Joel Schecheleski
 * @date 25/10/2019
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {Observable} from 'rxjs';
import {PushModel} from '../../../modules/modelos/pushModel';

@Injectable()
export class PushServices extends ResourceService<PushModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient, 'push');
    }

    /**
     * Estrutura de dados para novo registro
     * @param file
     */
    public pushData(file: any): Observable<PushModel> {
        this.dados = new PushModel(
            file ? file.city : '',
            file ? file.state : '',
            file ? file.message : '');
        console.log(this.dados);
        return;
    }

}


