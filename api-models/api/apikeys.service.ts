/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores a la 5, se pueden consultar en las versiones previas    ### 0.5.0 ***  ###Contacto Campaña Se define el esquema CampaignContact Se añaden los métodos para la obtención, creación y borrado masivo de contactos en una campaña Se añaden los métodos para la obtención, edición y borrado de contactos , de manera individual, en una campaña  ###CitizenCard Se añade la propiedad citizenId en tarjeta ciudadana   ### 0.5.1 *** Se declara el esquema Survey que almacenará valoraciones del ciudadano  ###Solicitudes Se depreca   /crmrequests/{crmRequestId}/bpsprocess Añade el método POST   /crmrequests/{crmRequestId}/survey para almacenar la respuesta a la valoración de la solicitud Se añade la propiedad survey a la solicitud para almacenar la valoración del ciudadano a la atención recibida Se modifica el método en el método /crmrequests/{crmRequestId}/situation la clase del objeto a enviar en el post de CrmRequest a Situation  ###Person Se añade la propiedad surveys para almacenar las valoraciones del ciudadano al servicio prestado por el ayuntamiento Añade el método POST   /persons/survey para almacenar una nueva respuesta de encuesta de valoración del servicio  ###0.5.2 ***  ###Personas   se modifica el método /persons/survey/ a   /persons/survey/{personId} pasando el id de la persona a la que establecer la encuesta    ##0.5.3 ***  ### Auth Se define el método auth/thirdpartylogin para proporcionar login SSO a terceros (ya implementado)  ### Comment Se agregan los campos tipo, codigo y descripcion de la situacion a los comentarios de una solicitud y una interaccion  ##0.5.4 ***  ### Tipos de interacciones  Define la propiedad identificator en el esquema de tipo de interacción Define el método  /interactions/types/{identificator} para obtener un tipo de interacción por su identificador 
 *
 * OpenAPI spec version: 0.5.4-PRIVATE
 * Contact: juancromero@grupotecopy.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ApiKey } from '../model/apiKey';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ApikeysService {

    protected basePath = '{servidor}/public/{version}';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apikeyGet(observe?: 'body', reportProgress?: boolean): Observable<Array<ApiKey>>;
    public apikeyGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ApiKey>>>;
    public apikeyGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ApiKey>>>;
    public apikeyGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (BearerToken) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<ApiKey>>('get',`${this.basePath}/apikey`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param app identificador de la app a la que hacer el login de tercero
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authThirdpartyloginAppGet(app: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public authThirdpartyloginAppGet(app: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public authThirdpartyloginAppGet(app: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public authThirdpartyloginAppGet(app: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (app === null || app === undefined) {
            throw new Error('Required parameter app was null or undefined when calling authThirdpartyloginAppGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (BearerToken) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('get',`${this.basePath}/auth/thirdpartylogin/${encodeURIComponent(String(app))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * delete
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // authentication (BearerToken) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/apikey/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findApiKeyById
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findApiKeyByIdUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<ApiKey>;
    public findApiKeyByIdUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiKey>>;
    public findApiKeyByIdUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiKey>>;
    public findApiKeyByIdUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findApiKeyByIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // authentication (BearerToken) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ApiKey>('get',`${this.basePath}/apikey/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * save
     * 
     * @param body apiKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST(body: ApiKey, observe?: 'body', reportProgress?: boolean): Observable<ApiKey>;
    public saveUsingPOST(body: ApiKey, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiKey>>;
    public saveUsingPOST(body: ApiKey, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiKey>>;
    public saveUsingPOST(body: ApiKey, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // authentication (BearerToken) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ApiKey>('post',`${this.basePath}/apikey`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * update
     * 
     * @param body apiKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(body: ApiKey, observe?: 'body', reportProgress?: boolean): Observable<ApiKey>;
    public updateUsingPUT(body: ApiKey, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiKey>>;
    public updateUsingPUT(body: ApiKey, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiKey>>;
    public updateUsingPUT(body: ApiKey, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // authentication (BearerToken) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ApiKey>('put',`${this.basePath}/apikey`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
