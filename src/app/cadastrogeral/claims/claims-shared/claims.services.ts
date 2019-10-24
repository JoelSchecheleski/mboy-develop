/**
 * CRUD do endpoint {{host}}/claims
 * @author Joel Schecheleski
 * @date 23/10/2019
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {Observable} from 'rxjs';
import {ClaimsModel} from './claimsModel';

@Injectable()
export class ClaimsServices extends ResourceService<ClaimsModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient, 'chat/search');
    }

    /**
     * Estrutura de dados para novo registro
     * @param file
     */
    public clamsData(file: any): Observable<any> {
        this.dados = {};
        this.dados = {
            id: file ? file.id : '',
            chatType: file ? file.chatType : '',
            subject: file ? file.subject : '',
            message: file ? file.message : '',
            messages: file ? file.messages : '',
            createdby: file ? file.createdby : '',
            status: file ? file.status : '',
            createdAt: file ? file.createdAt : '',
            serviceLog: file ? file.serviceLog : '',
            email: file ? file.email : '',
            userType: file ? file.userType : '',
            idDaCorrida: file ? file.idDaCorrida : ''
        };
        return this.dados;
    }

}


