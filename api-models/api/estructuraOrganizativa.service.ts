/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores a la 0.4.5, se pueden consultar en las versiones previas   ### 0.4.5 ***  ### FAQs Se renombran los métodos /faqs/file a /faqs/files para igualarlo con lo implementado en back se añade el método get  /faqs/files/{fileId} para la descarga de ficheros Se define corrctamente el método de subida de archivos post /faqs/files Se modifica FaqFile se añaden las propiedades fileName y fileType  ### 0.4.6 ***  ###Campañas Se definen el esquema Campaign Se definen los mátodos de camapañas   ###Users Se añade la propiedad citizen al esquema UserBasic que indica si es un usuario ciudadano  ### 0.4.7 *** modifica _id y fieldMaps en el esquema Campaign  ### 0.4.8 *** Se añade text en campaign para usar como texto a enviar en campañas que no usan plantillas como las notificaciones push Se añade subject  Se elimina campaignListId y se añade campaignListName Se añade la propiedad status (enumerado)       ### 0.4.9 *** Se añade metodo POST /persons/personContact  ### 0.5.0 ***  ###Contacto Campaña Se define el esquema CampaignContact Se añaden los métodos para la obtención, creación y borrado masivo de contactos en una campaña Se añaden los métodos para la obtención, edición y borrado de contactos , de manera individual, en una campaña  ###CitizenCard Se añade la propiedad citizenId en tarjeta ciudadana   ### 0.5.1 *** Se declara el esquema Survey que almacenará valoraciones del ciudadano  ###Solicitudes Se depreca   /crmrequests/{crmRequestId}/bpsprocess Añade el método POST   /crmrequests/{crmRequestId}/survey para almacenar la respuesta a la valoración de la solicitud Se añade la propiedad survey a la solicitud para almacenar la valoración del ciudadano a la atención recibida Se modifica el método en el método /crmrequests/{crmRequestId}/situation la clase del objeto a enviar en el post de CrmRequest a Situation  ###Person Se añade la propiedad surveys para almacenar las valoraciones del ciudadano al servicio prestado por el ayuntamiento Añade el método POST   /persons/survey para almacenar una nueva respuesta de encuesta de valoración del servicio 
 *
 * OpenAPI spec version: 0.5.1-PRIVATE
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

import { OrganizationalUnit } from '../model/organizationalUnit';
import { ServiceResponseError } from '../model/serviceResponseError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EstructuraOrganizativaService {

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
     * Obtiene una las estructuras organizativas hijas directas de la indicada.
     * Obtiene las estructuras organizativas hijas de un nodo
     * @param ouId ID de la estrcutura organizativa
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationChildsOuIdGet(ouId: string, observe?: 'body', reportProgress?: boolean): Observable<OrganizationalUnit>;
    public organizationChildsOuIdGet(ouId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationalUnit>>;
    public organizationChildsOuIdGet(ouId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationalUnit>>;
    public organizationChildsOuIdGet(ouId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ouId === null || ouId === undefined) {
            throw new Error('Required parameter ouId was null or undefined when calling organizationChildsOuIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKey) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
        }

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

        return this.httpClient.request<OrganizationalUnit>('get',`${this.basePath}/organization/childs/${encodeURIComponent(String(ouId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene estructura organizativa
     * Obtiene la estructura de la organización completa como unidades organizativas anidadas
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationGet(observe?: 'body', reportProgress?: boolean): Observable<OrganizationalUnit>;
    public organizationGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationalUnit>>;
    public organizationGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationalUnit>>;
    public organizationGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKey) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
        }

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

        return this.httpClient.request<OrganizationalUnit>('get',`${this.basePath}/organization`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Elimina una estructura organizativa
     * Elimina una estructura organizativa si no tiene hijos.
     * @param ouId ID de la estructura organizativa
     * @param forceDelete Indica si se elimina la estructura y se eliminan las unidades organizativas hijas
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationOuIdDelete(ouId: string, forceDelete?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public organizationOuIdDelete(ouId: string, forceDelete?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public organizationOuIdDelete(ouId: string, forceDelete?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public organizationOuIdDelete(ouId: string, forceDelete?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ouId === null || ouId === undefined) {
            throw new Error('Required parameter ouId was null or undefined when calling organizationOuIdDelete.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (forceDelete !== undefined && forceDelete !== null) {
            queryParameters = queryParameters.set('forceDelete', <any>forceDelete);
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

        return this.httpClient.request<any>('delete',`${this.basePath}/organization/${encodeURIComponent(String(ouId))}`,
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
     * Obtiene rama de una estructura organizativa
     * Obtiene una rama de la estructura de la organización desde un nodo y todos sus descendientes.
     * @param ouId ID de la estructura organizativa
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationOuIdGet(ouId: string, observe?: 'body', reportProgress?: boolean): Observable<OrganizationalUnit>;
    public organizationOuIdGet(ouId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationalUnit>>;
    public organizationOuIdGet(ouId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationalUnit>>;
    public organizationOuIdGet(ouId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ouId === null || ouId === undefined) {
            throw new Error('Required parameter ouId was null or undefined when calling organizationOuIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKey) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
        }

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

        return this.httpClient.request<OrganizationalUnit>('get',`${this.basePath}/organization/${encodeURIComponent(String(ouId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Actualiza una estructura organizativa
     * Actualiza la estructura organizativa.
     * @param body 
     * @param ouId ID de la estructura organizativa
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationOuIdPut(body: OrganizationalUnit, ouId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public organizationOuIdPut(body: OrganizationalUnit, ouId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public organizationOuIdPut(body: OrganizationalUnit, ouId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public organizationOuIdPut(body: OrganizationalUnit, ouId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling organizationOuIdPut.');
        }

        if (ouId === null || ouId === undefined) {
            throw new Error('Required parameter ouId was null or undefined when calling organizationOuIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/organization/${encodeURIComponent(String(ouId))}`,
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
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationParentsGet(observe?: 'body', reportProgress?: boolean): Observable<Array<OrganizationalUnit>>;
    public organizationParentsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<OrganizationalUnit>>>;
    public organizationParentsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<OrganizationalUnit>>>;
    public organizationParentsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKey) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
        }

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

        return this.httpClient.request<Array<OrganizationalUnit>>('get',`${this.basePath}/organization/parents`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Crear una estructura organizativa
     * Crea una estructura de la organización. Si se incluyen estructuras hijas, estas deben de existir en el sistema, si no existen se devolverá un error 400
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationPost(body: OrganizationalUnit, observe?: 'body', reportProgress?: boolean): Observable<OrganizationalUnit>;
    public organizationPost(body: OrganizationalUnit, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationalUnit>>;
    public organizationPost(body: OrganizationalUnit, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationalUnit>>;
    public organizationPost(body: OrganizationalUnit, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling organizationPost.');
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

        return this.httpClient.request<OrganizationalUnit>('post',`${this.basePath}/organization`,
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
