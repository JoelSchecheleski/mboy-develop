/**
 * CRUD do endpoint {{host}}/Antibiotico
 * @author Joel Schecheleski
 * @date 15/08/2018
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {AntibiogramaModel} from './antibiogramaModel';


@Injectable()
export class AntibiogramaServices extends ResourceService<AntibiogramaModel> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'Antibiotico');
    }

}
