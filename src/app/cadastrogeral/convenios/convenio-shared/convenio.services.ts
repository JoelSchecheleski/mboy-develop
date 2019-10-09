/**
 * CRUD do endpoint {{host}}/convenios
 * @author Joel Schecheleski
 * @date 06/05/2019
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {ConvenioModel} from './convenioModel';


@Injectable()
export class ConvenioServices extends ResourceService<ConvenioModel> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'Convenio');
    }

}
