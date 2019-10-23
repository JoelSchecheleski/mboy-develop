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
            httpClient,
            'claims');
    }

}


