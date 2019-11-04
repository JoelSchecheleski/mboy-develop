// @ts-ignore
import {Injectable} from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {MotoboyModel} from './motoboyModel';
// @ts-ignore
import {Observable} from 'rxjs';
import {Config} from '../../../app-config';

@Injectable()
export class MotoboyServices extends ResourceService<MotoboyModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'user');
        this.client_http = httpClient;
    }

    public userData(file: any): Observable<any> {
        this.dados = {
            id: file ? file.id : '',
            username: file ? file.username : '',
            email: file ? file.email : '',
            password: file ? file.password : '',
            name: file ? file.name : '',
            cpfCnpj: file ? file.cpfCnpj : '',
            userType: file ? file.userType : '',
            userTypeMboy: file ? file.userTypeMboy : '',
            active: file ? file.active : '',
            gender: file ? file.gender : '',
            dateOfBirth: file ? file.dateOfBirth : '',
            avatar: file ? file.avatar : '',
            comercialName: file ? file.comercialName : '',
            zipCode: file ? file.zipCode : '',
            neighborhood: file ? file.neighborhood : '',
            street: file ? file.street : '',
            houseNumber: file ? file.houseNumber : '',
            complement: file ? file.complement : '',
            accessoryType: file ? file.accessoryType : '',
            registrationStatus: file ? file.registrationStatus : '',
            pendingRecharge: file ? file.pendingRecharge : '',
            motorcyclePlate: file ? file.motorcyclePlate : '',
            cnh: file ? file.cnh : '',
            currentRank: file ? file.currentRank : '',
            vindiId: file ? file.vindiId : '',
            userstate: file ? file.userstate : '',
            usercity: file ? file.usercity : '',
            vehicleDocument: file ? file.vehicleDocument : '',
            cnhDocument: file ? file.cnhDocument : ''
        };

        return this.dados;
    }

    public getDocuments(username: String): any {
        const endpoint = new Config().getEndpoint();
        return this.client_http.get(`${endpoint}document/${username}`)
            .subscribe(
                data => { // @ts-ignore
                    return data;
                }
            );
    }
}
