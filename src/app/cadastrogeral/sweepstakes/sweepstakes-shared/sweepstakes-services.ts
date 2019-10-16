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
import {SweepstakesModel} from './SweepstakesModel';

@Injectable()
export class SweepstakesServices extends ResourceService<SweepstakesModel> {
    private dados: any;
    private client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'sweepstakes');
    }

    /**
     * Monta a estrutura de sorteios
     * @param file Objeto (registro) selecionado na grid.
     */
    public sweepstakesData(file: any): Observable<any> {
        this.dados = {};
        this.dados = {
            createdAt: file ? file.createdAt : '',
            cashPrize: file ? file.cashPrize : '',
            quantityWinners: file ? file.quantityWinners : '',
            userCategory: file ? file.userCategory : '',
            quantityServices: file ? file.quantityServices : '',
            quantityQualifiedUsers: file ? file.quantityQualifiedUsers : '',
            createdBy: file ? file.createdBy : ''
        };
        return this.dados;
    }
}


