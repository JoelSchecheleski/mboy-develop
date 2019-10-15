import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {json} from 'ng2-validation/dist/json';
import * as CryptoJS from 'crypto-js';
import {Config} from '../app-config';

@Injectable()
export class ApiMedeasy {
    public BaseUrl = new Config().getEndpoint();
    public jwtToken: string;
    public Usuario: string;
    public infoUser: any;

    public Token2: string;
    // private _headerConsumingApi = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.Token2 });


    public Cabecalho = new HttpHeaders()
        .append('Content-Type', 'application/json; charset=utf-8');
    //.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    //.append('Access-Control-Allow-Origin', '*');
    //.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, HEAD, OPTIONS');

    constructor(private Http: HttpClient) {
        // this.logout();
    }

    /**
     * Possibilita o usuário fazer login com o sistema
     * @param username Nome do usuário cadastrado no sistema
     * @param password Senha de acesso liberado para o mesmo
     * @return <any>
     */
    public login(username: string, password: string) {
        console.log('Usuario e senha', username, password);
        return this.Http.post<any>(`${this.BaseUrl}auth/signin`, JSON.stringify({
            username: username,
            password: password
        }), {headers: this.Cabecalho})
            .pipe(map((res: Response) => {

                // se login, então obtem um token jwt como resposta e armazena o Token recebido da API
                if (res) {
                    const retorno = JSON.parse(JSON.stringify(res));
                    this.jwtToken = retorno.jwtToken;
                    localStorage.setItem('TOKEN', JSON.stringify(this.jwtToken));
                    localStorage.setItem('SESSAO', JSON.stringify(retorno));

                    // Busca as informações de acesso do usuário e armazena temporariamente
                    this.getInfoUser(username);
                } else {
                    localStorage.setItem('SESSAO', JSON.stringify('access denied'));
                }
                return res;
            }));
    }

    /**
     * Busca informações do usuário logado e armazena essas informações de forma temporária
     * @param username Nome do usuário a ser localizado
     * @return void
     */
    public getInfoUser(username: string) {
        if (localStorage.getItem('TOKEN') != null) {
            return this.Http.get<any>(`${this.BaseUrl}InfoUsuario/${username}`)
                .subscribe(data => {
                    const dados = JSON.parse(JSON.stringify(data));
                    dados[0].accesskey = CryptoJS.AES.encrypt(dados[0].accesskey, '#mboy#').toString();
                    localStorage.setItem('infoUsuarioLogado', JSON.stringify(dados));
                });
        }
    }

    // /**
    //  * Realiza o logout do sistema removendo o currentUser do armazenamento local
    //  * @return void
    //  */
    // public logout(): void {
    //   // Limpa o token removendo o usuário do local store para efetuar o logout
    //   this.Token = null;
    //   localStorage.removeItem('usuarioLogado');
    //   localStorage.removeItem('infoUsuarioLogado');
    //   localStorage.removeItem('SESSAO');
    //   localStorage.removeItem('TOKEN');
    // }


    /**
     * Verificação de CEP
     * @param cep Informar um número de cep
     * @return <any>
     */
    public consultaCEP(cep: string) {
        cep = cep.replace(/\D/g, '');

        // Verifica se campo cep possui valor informado.
        if (cep !== '') {
            // Expressão regular para validar o CEP.
            const validacep = /^[0-9]{8}$/;

            // Valida o formato do CEP..
            if (validacep.test(cep)) {
                return this.Http.get(`//viacep.com.br/ws/${cep}/json`);
            }
        }
        return of({});
    }
}
