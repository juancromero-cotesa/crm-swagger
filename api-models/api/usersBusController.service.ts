/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores a la 5, se pueden consultar en las versiones previas    ### 0.5.0 ***  ### Contacto Campaña Se define el esquema CampaignContact Se añaden los métodos para la obtención, creación y borrado masivo de contactos en una campaña Se añaden los métodos para la obtención, edición y borrado de contactos , de manera individual, en una campaña  ### CitizenCard Se añade la propiedad citizenId en tarjeta ciudadana   ### 0.5.1 *** Se declara el esquema Survey que almacenará valoraciones del ciudadano  ### Solicitudes Se depreca   /crmrequests/{crmRequestId}/bpsprocess Añade el método POST   /crmrequests/{crmRequestId}/survey para almacenar la respuesta a la valoración de la solicitud Se añade la propiedad survey a la solicitud para almacenar la valoración del ciudadano a la atención recibida Se modifica el método en el método /crmrequests/{crmRequestId}/situation la clase del objeto a enviar en el post de CrmRequest a Situation  ### Person Se añade la propiedad surveys para almacenar las valoraciones del ciudadano al servicio prestado por el ayuntamiento Añade el método POST   /persons/survey para almacenar una nueva respuesta de encuesta de valoración del servicio  ### 0.5.2 ***  ### Personas   se modifica el método /persons/survey/ a   /persons/survey/{personId} pasando el id de la persona a la que establecer la encuesta    ## 0.5.3 ***  ### Auth Se define el método auth/thirdpartylogin para proporcionar login SSO a terceros (ya implementado)  ### Comment Se agregan los campos tipo, codigo y descripcion de la situacion a los comentarios de una solicitud y una interaccion  ## 0.5.4 ***  ### Tipos de interacciones  Define la propiedad identificator en el esquema de tipo de interacción Define el método  /interactions/types/{identificator} para obtener un tipo de interacción por su identificador  ## 0.5.5 ***  ### Personas Se añade el atributo que contiene la lista negra de tipos de interacciones a no registrar en la persona  ### CensusType Se añade el atributo email que guarda el email del usuario en el censo 
 *
 * OpenAPI spec version: 0.5.5-PRIVATE
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

import { User } from '../model/user';
import { UserDto } from '../model/userDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UsersBusControllerService {

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
     * getUserByDocId
     * 
     * @param docId docId
     * @param getperson getperson
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserByDocIdUsingGET(docId: string, getperson: boolean, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public getUserByDocIdUsingGET(docId: string, getperson: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public getUserByDocIdUsingGET(docId: string, getperson: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public getUserByDocIdUsingGET(docId: string, getperson: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (docId === null || docId === undefined) {
            throw new Error('Required parameter docId was null or undefined when calling getUserByDocIdUsingGET.');
        }

        if (getperson === null || getperson === undefined) {
            throw new Error('Required parameter getperson was null or undefined when calling getUserByDocIdUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (getperson !== undefined && getperson !== null) {
            queryParameters = queryParameters.set('getperson', <any>getperson);
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

        return this.httpClient.request<UserDto>('get',`${this.basePath}/usersbus/doc/${encodeURIComponent(String(docId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUserByIdSgtc
     * 
     * @param getperson getperson
     * @param idSgtc idSgtc
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserByIdSgtcUsingGET1(getperson: boolean, idSgtc: string, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public getUserByIdSgtcUsingGET1(getperson: boolean, idSgtc: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public getUserByIdSgtcUsingGET1(getperson: boolean, idSgtc: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public getUserByIdSgtcUsingGET1(getperson: boolean, idSgtc: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (getperson === null || getperson === undefined) {
            throw new Error('Required parameter getperson was null or undefined when calling getUserByIdSgtcUsingGET1.');
        }

        if (idSgtc === null || idSgtc === undefined) {
            throw new Error('Required parameter idSgtc was null or undefined when calling getUserByIdSgtcUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (getperson !== undefined && getperson !== null) {
            queryParameters = queryParameters.set('getperson', <any>getperson);
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

        return this.httpClient.request<UserDto>('get',`${this.basePath}/usersbus/tc/${encodeURIComponent(String(idSgtc))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUserByUserName
     * 
     * @param getperson getperson
     * @param password password
     * @param username username
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserByUserNameUsingGET1(getperson: boolean, password: string, username: string, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public getUserByUserNameUsingGET1(getperson: boolean, password: string, username: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public getUserByUserNameUsingGET1(getperson: boolean, password: string, username: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public getUserByUserNameUsingGET1(getperson: boolean, password: string, username: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (getperson === null || getperson === undefined) {
            throw new Error('Required parameter getperson was null or undefined when calling getUserByUserNameUsingGET1.');
        }

        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling getUserByUserNameUsingGET1.');
        }

        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling getUserByUserNameUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (getperson !== undefined && getperson !== null) {
            queryParameters = queryParameters.set('getperson', <any>getperson);
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

        return this.httpClient.request<UserDto>('get',`${this.basePath}/usersbus/${encodeURIComponent(String(username))}/${encodeURIComponent(String(password))}`,
            {
                params: queryParameters,
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
     * @param body user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST6(body: User, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public saveUsingPOST6(body: User, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public saveUsingPOST6(body: User, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public saveUsingPOST6(body: User, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveUsingPOST6.');
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

        return this.httpClient.request<User>('post',`${this.basePath}/usersbus`,
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
     * validUserName
     * 
     * @param username username
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public validUserNameUsingGET1(username: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: boolean; }>;
    public validUserNameUsingGET1(username: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: boolean; }>>;
    public validUserNameUsingGET1(username: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: boolean; }>>;
    public validUserNameUsingGET1(username: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling validUserNameUsingGET1.');
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

        return this.httpClient.request<{ [key: string]: boolean; }>('get',`${this.basePath}/usersbus/validusername/${encodeURIComponent(String(username))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
