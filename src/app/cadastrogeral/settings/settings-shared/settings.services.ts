// @ts-ignore
import {Injectable} from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {SettingsModel} from './settingsModel';
// @ts-ignore
import {Observable} from 'rxjs';

@Injectable()
export class SettingsServices extends ResourceService<SettingsModel> {
    private dados: any;
    public client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'user');
        this.client_http = httpClient;
    }

    public settingsData(file: SettingsModel): Observable<any> {
        this.dados = {
            minimumValueBankSlip: file ? file.minimumValueBankSlip : 0,
            settingPerKmName: file ? file.settingPerKmName : '',
            settingPerHourName: file ? file.settingPerHourName : '',
            settingPerKmNameId: file ? file.settingPerKmNameId : 0,
            settingPerHourNameId: file ? file.settingPerHourNameId : 0,
            active: file ? file.active : false
        };
        return this.dados;
    }
}
