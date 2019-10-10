import {throwError as observableThrowError, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Resource} from './Resource';
import {QueryOptions} from './query-options';
import {map} from 'rxjs/operators';

export class ResourceService<T extends Resource> {
    url = 'http://localhost:8080/api/';
    // url = 'http://54.207.116.219:8080/api/';
    public results: any;

    constructor(
        private httpClient: HttpClient,
        private endpoint: string) {
    }

    /**
     * Cria um novo registro
     * @param item Item{Object<T>} a ser inserido
     * @return <T> data object
     */
    public POST(item: T): Observable<T> {
        delete item['id'];
        console.log('Objeto a ser inserido: ' + JSON.stringify(item));
        return this.httpClient
            .post<T>(`${this.url}${this.endpoint}`, JSON.stringify(item)).pipe(
                map(data => {
                    return data as T;
                }));
    }

    /**
     * Atualiza um object existente
     * @param item Item{Object} a ser atualizado
     * @return <T> Object updated
     */
    public PUT(item: T): Observable<T> {
        console.log('Objeto a ser atualizado: ' + JSON.stringify(item));
        // const headers = new HttpHeaders().set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('SESSAO')).accessToken}`);
        return this.httpClient
            .put<T>(`${this.url}${this.endpoint}/${item.id}`, JSON.stringify(item)).pipe(
                map(data => {
                    return data as T;
                }));
    }

    public POT(item: T, id: T): Observable<T> {
        console.log('ID do objeto a ser atualizado: ' + id + ', Objeto a ser atualizado : ' + JSON.stringify(item));
        // const headers = new HttpHeaders().set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('SESSAO')).accessToken}`);
        return this.httpClient
            .put<T>(`${this.url}${this.endpoint}/updateUser`, JSON.stringify(item)).pipe(
                map(data => {
                    return data as T;
                }));
    }

    /**
     * Retorna um registro pelo id informado
     * @param id ID para a pesquisa
     * @return <T>{Object}
     */
    public GETID(id: number): Observable<T> {
        return this.httpClient
            .get(`${this.url}{this.endpoint}/${id}`)
            .pipe(map((data: any) => {
                    return data as T;
                })
            );
    }

    getTodos(): Observable<T> {
        return this.httpClient.get(`${this.url}${this.endpoint}`)
            .pipe(map((data: Resource) => {
                    // return JSON.stringify(data);
                    return data as T;
                })
            );
    }

    // this.serializer.fromJson(data) as T)

    /**
     * Busca todos os registros do end-point informado
     * @return Array de objetos {}[]
     */
    public GET(): Observable<T> {
        return this.httpClient
            .get(`${this.url}${this.endpoint}`)
            .pipe(map((data: any) => {
                    return data as T;
                })
            );
    }

    /**
     * Retorna um ou mais registros através de uma query de opções
     * @param queryOptions Filtros a serem enviados para a pesquisa
     * @return Lista de objetos[] ou  somente um caso a pesquisa não contemple mais
     */
    public LIST(queryOptions: QueryOptions): Observable<T[]> {
        return this.httpClient
            .get(`${this.url}${this.endpoint}?${queryOptions.toQueryString()}`).pipe(
                map((data: any) => {
                    return this.convertData(data.items);
                }));
    }

    /**
     * Deleta um registro pelo id informado
     * @param id ID para deleção do registro
     * @Return void
     */
    public DELETE(id: number) {
        console.log(`${this.url}${this.endpoint}/${id}`);
        return this.httpClient.delete(`${this.url}${this.endpoint}/${id}`);
    }

    /**
     * Converte um conjunto de dados para JSON
     * @param data Dados a serem convertido
     * @return Conjunto de dados {}[]
     */
    private convertData(data: any): T[] {
        return data.map(item => item);
    }

    /**
     * Busca os erros que podem ocorrer na consulta do end-point
     * @param error Response
     * @return Error Mensage and status code
     */
    private handleError(error: Response) {
        return observableThrowError(error.statusText);
    }

}
