import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, Component} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
import {Config} from './app-config';

@Injectable()
export class AuthGuardService implements CanActivate {
    private _baseUrl = new Config().getEndpoint();
    public _token: string;
    public _usuario: string;
    public infoUser: any;
    public _token2: string;

    public _cabecalho = new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, HEAD, OPTIONS');

    constructor(public router: Router, private _http: HttpClient) {
    }

    canActivate(): boolean {
        const infoUsuarioLogado = JSON.parse(localStorage.getItem('infoUsuarioLogado'));
        const isAuthenticated = JSON.parse(localStorage.getItem('SESSAO')).authenticated;
        const expire = new Date(`${JSON.parse(localStorage.getItem('SESSAO')).expiration}`).getTime();
        const atual = new Date().getTime();
        const intervalo = expire - atual; // 600000 mm == 10 min

        if (intervalo < 1.8e+6 && intervalo > 0) {
            const jwtToken = CryptoJS.AES.decrypt(String(infoUsuarioLogado.jwtToken).trim(), '#mboy#').toString(CryptoJS.enc.Utf8);
            this._http.post<any>(`${this._baseUrl}auth/signin`, {
                username: infoUsuarioLogado.username,
                password: jwtToken
            }, {headers: this._cabecalho})
                .subscribe(res => {
                    if (res) {
                        const retorno = JSON.parse(JSON.stringify(res));
                        this._token = retorno.accessToken;
                        localStorage.setItem('TOKEN', JSON.stringify(this._token));
                        localStorage.setItem('SESSAO', JSON.stringify(retorno));
                    } else {
                        localStorage.setItem('SESSAO', JSON.stringify('access denied'));
                    }
                });
            return true;
            // tslint:disable-next-line:triple-equals
        } else if (isAuthenticated == false || expire < atual) { // expire  < atual && !
            this.router.navigate(['/session/loginV2']);
            return false;
        } else {
            return true;
        }
    }
}

