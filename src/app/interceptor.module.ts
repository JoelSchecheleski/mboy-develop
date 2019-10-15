/**
 * Interceptador HTTP para adicionar o Token nas requisições ao serve e mapear os erros a fim de verificar erro de token expirado
 * tentando renova-lo caso possivel, aceitando multiplas chamadas assincronas * com o token expirado criando uma espece de "fila" até que
 * a 1º chamada que solicitou o token seja resolvida.
 * @author  Joel Schecheleski
 * @version 3.0
 * @since   16-02-2019
 */

import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';


import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(public router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        /**
         * Se existir uma LocalStorage com a SESSAO criada então resolve o header das requisições
         */
        if (localStorage.getItem('SESSAO') != null) {
            const clone = req.clone({
                headers: req.headers.append('Content-Type', 'application/json; charset=utf-8')
                    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
                    .set('Access-Control-Allow-Origin', '*')
                    .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, HEAD, OPTIONS')
                    .set('SYSTEM', 'Mboy')
                    .set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('SESSAO')).jwtToken}`)
            });
            return next.handle(clone);
        } else {
            const firstLogin = req.clone({
                headers: req.headers.append('Content-Type', 'application/json; charset=utf-8')
                    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
                    .set('Access-Control-Allow-Origin', '*')
                    .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, HEAD, OPTIONS')
                    .set('SYSTEM', 'Mboy')
            });
            this.router.navigate(['/session/loginV2']);
            return next.handle(firstLogin);
        }
    }
}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JWTInterceptor,
            multi: true,
        },
    ],
})

export class Interceptor {
}
