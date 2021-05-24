/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  ## 0.2.2 *** - Incluye enpoints de grupos ## 0.2.3 *** - Incluye método para la obtención de literales ## 0.2.4 *** - Añade métodos de búsqueda de personas - Añade esquemas de filtros para su uso con personas pero que serán de uso global en cualquier fitrado paginado - Añade permisos a apikeys - Añade métodos de interacciones ## 0.2.5 *** - Renombra Permissions como CrmPermissions por entrar en conflicto con interfaz Permissions de Typescript - Renombra FeaturePermissions como CrmFeaturePermissions  - Elimina estructura AllOf cuando se usa para añadir descripción  - Establece elementos obligatorios en el esquema de ApiKey - Añade endpoint para la obtención de parámetros de la aplicación - Añade interactionsStatistic en el esquema de persona para almacenar estadisticas de interacciones - Añade esquema interactionStatistic como elementos del array de interactionsStatistic - Se elimina UserRequest y se envía un usuario en post - Modifica request de búsqueda de personas - Añade métodos de parametrización - Establece los métodos de contacto como parámetros  - Establece los tipos de documentos como parámetros  - Establece los tipos de personas como parámetros - Establece los tipos de direcciones como parámetros  - Establece los géneros de personas como parámetros  ## 0.2.6 *** - Añade método de obtención de persona por email - Añade ejemplo de esquema de filtro   - Añade requeridos en persona personType y name  - Renombra esquema Roles a Role - Elimina de unidad organizativa el padre y lo referencia mediante su ID ## 0.2.7 *** - Añade flag de borrado lógico a personas - añade fecha de borrado lógico a personas - Modifica la respuesta de retorno de la eliminación lógica de persona - Redefine el modelo OrganizationalUnit - Incorpora el método ya desarrollado /organization/parents - Define nueva estructura de resultados de búsquedas paginadas - Define el método search de búsqueda de interacciones paginadas - Define la respuesta del filtro de auditoría como SearchResponse - Define el modelo de auditoría - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Nuevos métodos de búsqueda para person, interaction, crmrequest y audit - Modifica la estructura de filter añade metadatas y operator - añadidos métodos de solicitudes ya desarrollados (10%) - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Añade comentarios a las solicitudes (en la api actual está como notes)     - Añade CustomForm, customFormData, active, createDate y lastModifiedDate a CrmRequest - CrmRequestType - Se modifica summary por name. Falta el campo identificator en la API se añade OrganizationalUnit - Añade método de obtencion de avatar en personas     - Añade método de obtencion de logo en estructura organizativa     ## 0.2.8 *** - Incorpora todos los métodos importando Swagger 2.0 al 16/04/2021 - Se deprecan los métodos de filtro de auditoria, personas, interacciones y solicitudes - Se deprecan los métodos de obtener y crear notas, se sustituyen por comments - Se depreca la entidad Note -  CUSTOMFORMS *** - Se deprecan los métodos de obtener customform por name y por type - Se especifica el retorno correcto en el delete - Se añade la propiedad _id y se depreca la propiedad type -  DATASOURCES *** - Se añaden definiones de métodos ya implementados. Necesario repasar - Se añade el atributo descripción al datasource - Se renombra el atributo query como ruleSet - Se añade el atributo mongoQuery como string - Se añade el atributo projection coo array de strings - Se añade el atributo OrganizationalUnitAllowed - Se añade el atributo userOwner  Uso de interfaz CollectionName - El método /datasource/collectionsnames retorna un array de CollectionName (Ahora retorna un ha-shmap, valorar si es un cambio sencillo. Si no lo es es posible hacerlo en front) - Se cambia el tipo del atributo collection a CollectionName  -  ExternalAplication *** - Se establece el _id como ObjectID - CrmRequest *** - Se añade la propiedad details - Se añade la propiedad subjectId del tipo Person que será pa persona propietaria de la solicitud. Será el ObjectID de la persona - Comment *** - Se añade la propiedad user del tipo UserBasic - Interacciones *** - Se depreca get interactions - Widgets *** - se definene las clases Widget, WidgetChart e WidgetIndicator - Métodos crud de widgets - OrganizationUnit *** - Se renombra la OrganizationUnit a OrganizationalUnit - Se renombra la propiedad organizationUnitType a organizationalUnitType - OrganizationUnitType *** Se renombra la clase a OrganizationalUnitType   ### 0.2.9 ***  DATASOURCES *** - Se definen los modelos Rule y RuleSet - Se define el tipo de la propiedad ruleset como un objeto del tipo Rule o Ruleset  APIKEYS *** Se añade la propiedad roles como array de Roles que almacena los roles de una apiKey  ## 0.3.0 ***  Situation *** - Se redefine la clase con los atributos _id y situacionType situacionType será un objeto del tipo SituacionType que definirá la situación  SituationType *** Se define la clase SituationType y sus métodos  Interactions *** - Se elimina el método filter - En el método de añadir situación se envía y retorna la situación añadida , no la interacción completa (/interactions/{id}/situation)  CrmRequest *** - Se elimina el método filter - se deprecan los métodos get y post de notes - se depreca el método get de sitauciones de una solicitud '/crmrequests/situations/{crmRequestId} 
 *
 * OpenAPI spec version: 0.3.0-PRIVATE
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

import { BpsInstance } from '../model/bpsInstance';
import { CrmRequest } from '../model/crmRequest';
import { CrmRequestType } from '../model/crmRequestType';
import { Filter } from '../model/filter';
import { Note } from '../model/note';
import { SearchResponse } from '../model/searchResponse';
import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SolicitudesService {

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
     * addNotesByIdCrmRequest
     * 
     * @param body crmRequest
     * @param crmRequestId crmRequestId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addNotesByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public addNotesByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public addNotesByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public addNotesByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addNotesByIdCrmRequestUsingPOST.');
        }

        if (crmRequestId === null || crmRequestId === undefined) {
            throw new Error('Required parameter crmRequestId was null or undefined when calling addNotesByIdCrmRequestUsingPOST.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<string>('post',`${this.basePath}/crmrequests/${encodeURIComponent(String(crmRequestId))}/notes`,
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
     * addSituationByIdCrmRequest
     * 
     * @param body crmRequest
     * @param crmRequestId crmRequestId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addSituationByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public addSituationByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public addSituationByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public addSituationByIdCrmRequestUsingPOST(body: CrmRequest, crmRequestId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addSituationByIdCrmRequestUsingPOST.');
        }

        if (crmRequestId === null || crmRequestId === undefined) {
            throw new Error('Required parameter crmRequestId was null or undefined when calling addSituationByIdCrmRequestUsingPOST.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<string>('post',`${this.basePath}/crmrequests/${encodeURIComponent(String(crmRequestId))}/situation`,
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
     * deleteById
     * 
     * @param idCrmRequestType idCrmRequestType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteByIdUsingDELETE(idCrmRequestType: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public deleteByIdUsingDELETE(idCrmRequestType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public deleteByIdUsingDELETE(idCrmRequestType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public deleteByIdUsingDELETE(idCrmRequestType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idCrmRequestType === null || idCrmRequestType === undefined) {
            throw new Error('Required parameter idCrmRequestType was null or undefined when calling deleteByIdUsingDELETE.');
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

        return this.httpClient.request<string>('delete',`${this.basePath}/crmrequests/types/${encodeURIComponent(String(idCrmRequestType))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteCrmRequestById
     * 
     * @param crmRequestId crmRequestId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCrmRequestByIdUsingDELETE(crmRequestId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public deleteCrmRequestByIdUsingDELETE(crmRequestId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public deleteCrmRequestByIdUsingDELETE(crmRequestId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public deleteCrmRequestByIdUsingDELETE(crmRequestId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (crmRequestId === null || crmRequestId === undefined) {
            throw new Error('Required parameter crmRequestId was null or undefined when calling deleteCrmRequestByIdUsingDELETE.');
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

        return this.httpClient.request<string>('delete',`${this.basePath}/crmrequests/${encodeURIComponent(String(crmRequestId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Filtro de solicitudes (Paginado)
     * 
     * @param active Filtro para indicar si las solicitudes están finalizadas o no
     * @param dateFrom Fecha desde la que se quiere filtrar yyyy-mm-dd
     * @param dateTo Fecha hasta la que se quiere filtrar yyyy-mm-dd
     * @param idPerson Id Ciudadano
     * @param interactionOrigenId Id de la interacción de origen de la solicitud
     * @param page Página(valor por defecto 0)
     * @param requestType Identificador del tipo de la solicitud
     * @param size Tamaño de la paginación (valor por defecto 10)
     * @param sortDir Ordenación (ASC &#x3D; 1, DESC &#x3D; -1)
     * @param sortField Campo de ordenación
     * @param userNameAgent Username del usuario que gestiona la solicitud
     * @param userNameOwner Username del usuario que realiza la solicitud
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public filterInteractionsUsingGET(active?: boolean, dateFrom?: string, dateTo?: string, idPerson?: string, interactionOrigenId?: string, page?: number, requestType?: string, size?: number, sortDir?: number, sortField?: string, userNameAgent?: string, userNameOwner?: string, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public filterInteractionsUsingGET(active?: boolean, dateFrom?: string, dateTo?: string, idPerson?: string, interactionOrigenId?: string, page?: number, requestType?: string, size?: number, sortDir?: number, sortField?: string, userNameAgent?: string, userNameOwner?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public filterInteractionsUsingGET(active?: boolean, dateFrom?: string, dateTo?: string, idPerson?: string, interactionOrigenId?: string, page?: number, requestType?: string, size?: number, sortDir?: number, sortField?: string, userNameAgent?: string, userNameOwner?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public filterInteractionsUsingGET(active?: boolean, dateFrom?: string, dateTo?: string, idPerson?: string, interactionOrigenId?: string, page?: number, requestType?: string, size?: number, sortDir?: number, sortField?: string, userNameAgent?: string, userNameOwner?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {













        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (active !== undefined && active !== null) {
            queryParameters = queryParameters.set('active', <any>active);
        }
        if (dateFrom !== undefined && dateFrom !== null) {
            queryParameters = queryParameters.set('dateFrom', <any>dateFrom);
        }
        if (dateTo !== undefined && dateTo !== null) {
            queryParameters = queryParameters.set('dateTo', <any>dateTo);
        }
        if (idPerson !== undefined && idPerson !== null) {
            queryParameters = queryParameters.set('idPerson', <any>idPerson);
        }
        if (interactionOrigenId !== undefined && interactionOrigenId !== null) {
            queryParameters = queryParameters.set('interactionOrigenId', <any>interactionOrigenId);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (requestType !== undefined && requestType !== null) {
            queryParameters = queryParameters.set('requestType', <any>requestType);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
        }
        if (sortField !== undefined && sortField !== null) {
            queryParameters = queryParameters.set('sortField', <any>sortField);
        }
        if (userNameAgent !== undefined && userNameAgent !== null) {
            queryParameters = queryParameters.set('userNameAgent', <any>userNameAgent);
        }
        if (userNameOwner !== undefined && userNameOwner !== null) {
            queryParameters = queryParameters.set('userNameOwner', <any>userNameOwner);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests/filter`,
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
     * findAll
     * 
     * @param page page
     * @param size size
     * @param sortDir sortDir
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllUsingGET(page: number, size: number, sortDir: number, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public findAllUsingGET(page: number, size: number, sortDir: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public findAllUsingGET(page: number, size: number, sortDir: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public findAllUsingGET(page: number, size: number, sortDir: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling findAllUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling findAllUsingGET.');
        }

        if (sortDir === null || sortDir === undefined) {
            throw new Error('Required parameter sortDir was null or undefined when calling findAllUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests`,
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
     * findBpsProcessInstancesByIdCrmRequest
     * 
     * @param crmRequestId crmRequestId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findBpsProcessInstancesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BpsInstance>>;
    public findBpsProcessInstancesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BpsInstance>>>;
    public findBpsProcessInstancesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BpsInstance>>>;
    public findBpsProcessInstancesByIdCrmRequestUsingGET(crmRequestId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (crmRequestId === null || crmRequestId === undefined) {
            throw new Error('Required parameter crmRequestId was null or undefined when calling findBpsProcessInstancesByIdCrmRequestUsingGET.');
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

        return this.httpClient.request<Array<BpsInstance>>('get',`${this.basePath}/crmrequests/${encodeURIComponent(String(crmRequestId))}/bpsprocess`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findByCrmRequestType
     * 
     * @param active active
     * @param page page
     * @param size size
     * @param sortDir sortDir
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByCrmRequestTypeUsingGET(active: boolean, page: number, size: number, sortDir: number, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public findByCrmRequestTypeUsingGET(active: boolean, page: number, size: number, sortDir: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public findByCrmRequestTypeUsingGET(active: boolean, page: number, size: number, sortDir: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public findByCrmRequestTypeUsingGET(active: boolean, page: number, size: number, sortDir: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (active === null || active === undefined) {
            throw new Error('Required parameter active was null or undefined when calling findByCrmRequestTypeUsingGET.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling findByCrmRequestTypeUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling findByCrmRequestTypeUsingGET.');
        }

        if (sortDir === null || sortDir === undefined) {
            throw new Error('Required parameter sortDir was null or undefined when calling findByCrmRequestTypeUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (active !== undefined && active !== null) {
            queryParameters = queryParameters.set('active', <any>active);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests/active`,
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
     * findByCrmRequestType
     * 
     * @param identificator identificator
     * @param page page
     * @param size size
     * @param sortDir sortDir
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByCrmRequestTypeUsingGET1(identificator: string, page: number, size: number, sortDir: number, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public findByCrmRequestTypeUsingGET1(identificator: string, page: number, size: number, sortDir: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public findByCrmRequestTypeUsingGET1(identificator: string, page: number, size: number, sortDir: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public findByCrmRequestTypeUsingGET1(identificator: string, page: number, size: number, sortDir: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (identificator === null || identificator === undefined) {
            throw new Error('Required parameter identificator was null or undefined when calling findByCrmRequestTypeUsingGET1.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling findByCrmRequestTypeUsingGET1.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling findByCrmRequestTypeUsingGET1.');
        }

        if (sortDir === null || sortDir === undefined) {
            throw new Error('Required parameter sortDir was null or undefined when calling findByCrmRequestTypeUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests/type/${encodeURIComponent(String(identificator))}`,
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
     * findByIdUserAgent
     * 
     * @param idUser idUser
     * @param page page
     * @param size size
     * @param sortDir sortDir
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUserAgentUsingGET(idUser: string, page: number, size: number, sortDir: number, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public findByIdUserAgentUsingGET(idUser: string, page: number, size: number, sortDir: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public findByIdUserAgentUsingGET(idUser: string, page: number, size: number, sortDir: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public findByIdUserAgentUsingGET(idUser: string, page: number, size: number, sortDir: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idUser === null || idUser === undefined) {
            throw new Error('Required parameter idUser was null or undefined when calling findByIdUserAgentUsingGET.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling findByIdUserAgentUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling findByIdUserAgentUsingGET.');
        }

        if (sortDir === null || sortDir === undefined) {
            throw new Error('Required parameter sortDir was null or undefined when calling findByIdUserAgentUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests/agent/${encodeURIComponent(String(idUser))}`,
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
     * findByIdUserOwner
     * 
     * @param idUser idUser
     * @param page page
     * @param size size
     * @param sortDir sortDir
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUserOwnerUsingGET(idUser: string, page: number, size: number, sortDir: number, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public findByIdUserOwnerUsingGET(idUser: string, page: number, size: number, sortDir: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public findByIdUserOwnerUsingGET(idUser: string, page: number, size: number, sortDir: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public findByIdUserOwnerUsingGET(idUser: string, page: number, size: number, sortDir: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idUser === null || idUser === undefined) {
            throw new Error('Required parameter idUser was null or undefined when calling findByIdUserOwnerUsingGET.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling findByIdUserOwnerUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling findByIdUserOwnerUsingGET.');
        }

        if (sortDir === null || sortDir === undefined) {
            throw new Error('Required parameter sortDir was null or undefined when calling findByIdUserOwnerUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests/owner/${encodeURIComponent(String(idUser))}`,
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
     * findNotesByIdCrmRequest
     * 
     * @param crmRequestId crmRequestId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findNotesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Note>>;
    public findNotesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Note>>>;
    public findNotesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Note>>>;
    public findNotesByIdCrmRequestUsingGET(crmRequestId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (crmRequestId === null || crmRequestId === undefined) {
            throw new Error('Required parameter crmRequestId was null or undefined when calling findNotesByIdCrmRequestUsingGET.');
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

        return this.httpClient.request<Array<Note>>('get',`${this.basePath}/crmrequests/${encodeURIComponent(String(crmRequestId))}/notes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Devuelve las todas las Solicitudes del ciudadano (Paginado)
     * 
     * @param fieldSort Campo por el que se ordena
     * @param idPerson Id Ciudadano
     * @param page Página(valor por defecto 0)
     * @param size Tamaño de la paginación (valor por defecto 10)
     * @param sortDir Ordenación (ASC &#x3D; 1, DESC &#x3D; -1)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findPaginateByIdPersonUsingGET(fieldSort?: string, idPerson?: string, page?: number, size?: number, sortDir?: number, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public findPaginateByIdPersonUsingGET(fieldSort?: string, idPerson?: string, page?: number, size?: number, sortDir?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public findPaginateByIdPersonUsingGET(fieldSort?: string, idPerson?: string, page?: number, size?: number, sortDir?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public findPaginateByIdPersonUsingGET(fieldSort?: string, idPerson?: string, page?: number, size?: number, sortDir?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fieldSort !== undefined && fieldSort !== null) {
            queryParameters = queryParameters.set('fieldSort', <any>fieldSort);
        }
        if (idPerson !== undefined && idPerson !== null) {
            queryParameters = queryParameters.set('idPerson', <any>idPerson);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests/citizen`,
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
     * findSituationsByCrmRequestId
     * 
     * @param crmRequestId crmRequestId
     * @param page page
     * @param size size
     * @param sortDir sortDir
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findSituationsByCrmRequestIdUsingGET(crmRequestId: string, page: number, size: number, sortDir: number, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public findSituationsByCrmRequestIdUsingGET(crmRequestId: string, page: number, size: number, sortDir: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public findSituationsByCrmRequestIdUsingGET(crmRequestId: string, page: number, size: number, sortDir: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public findSituationsByCrmRequestIdUsingGET(crmRequestId: string, page: number, size: number, sortDir: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (crmRequestId === null || crmRequestId === undefined) {
            throw new Error('Required parameter crmRequestId was null or undefined when calling findSituationsByCrmRequestIdUsingGET.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling findSituationsByCrmRequestIdUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling findSituationsByCrmRequestIdUsingGET.');
        }

        if (sortDir === null || sortDir === undefined) {
            throw new Error('Required parameter sortDir was null or undefined when calling findSituationsByCrmRequestIdUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sortDir !== undefined && sortDir !== null) {
            queryParameters = queryParameters.set('sortDir', <any>sortDir);
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

        return this.httpClient.request<SearchResponse>('get',`${this.basePath}/crmrequests/situations/${encodeURIComponent(String(crmRequestId))}`,
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
     * findTypeById
     * 
     * @param idCrmRequestType idCrmRequestType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findTypeByIdUsingGET(idCrmRequestType: string, observe?: 'body', reportProgress?: boolean): Observable<CrmRequestType>;
    public findTypeByIdUsingGET(idCrmRequestType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CrmRequestType>>;
    public findTypeByIdUsingGET(idCrmRequestType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CrmRequestType>>;
    public findTypeByIdUsingGET(idCrmRequestType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idCrmRequestType === null || idCrmRequestType === undefined) {
            throw new Error('Required parameter idCrmRequestType was null or undefined when calling findTypeByIdUsingGET.');
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

        return this.httpClient.request<CrmRequestType>('get',`${this.basePath}/crmrequests/types/${encodeURIComponent(String(idCrmRequestType))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllTypes
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTypesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<CrmRequestType>>;
    public getAllTypesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CrmRequestType>>>;
    public getAllTypesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CrmRequestType>>>;
    public getAllTypesUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<CrmRequestType>>('get',`${this.basePath}/crmrequests/types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCrmRequestById
     * 
     * @param crmRequestId crmRequestId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCrmRequestByIdUsingGET(crmRequestId: string, observe?: 'body', reportProgress?: boolean): Observable<CrmRequest>;
    public getCrmRequestByIdUsingGET(crmRequestId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CrmRequest>>;
    public getCrmRequestByIdUsingGET(crmRequestId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CrmRequest>>;
    public getCrmRequestByIdUsingGET(crmRequestId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (crmRequestId === null || crmRequestId === undefined) {
            throw new Error('Required parameter crmRequestId was null or undefined when calling getCrmRequestByIdUsingGET.');
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

        return this.httpClient.request<CrmRequest>('get',`${this.basePath}/crmrequests/${encodeURIComponent(String(crmRequestId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUserAgents
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserAgentsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<User>>;
    public getUserAgentsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<User>>>;
    public getUserAgentsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<User>>>;
    public getUserAgentsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<User>>('get',`${this.basePath}/crmrequests/useragents`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * postCrmRequest
     * 
     * @param body crmRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCrmRequestUsingPOST(body: CrmRequest, observe?: 'body', reportProgress?: boolean): Observable<CrmRequest>;
    public postCrmRequestUsingPOST(body: CrmRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CrmRequest>>;
    public postCrmRequestUsingPOST(body: CrmRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CrmRequest>>;
    public postCrmRequestUsingPOST(body: CrmRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCrmRequestUsingPOST.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CrmRequest>('post',`${this.basePath}/crmrequests`,
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
     * postType
     * 
     * @param body crmRequestType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postTypeUsingPOST(body: CrmRequestType, observe?: 'body', reportProgress?: boolean): Observable<CrmRequestType>;
    public postTypeUsingPOST(body: CrmRequestType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CrmRequestType>>;
    public postTypeUsingPOST(body: CrmRequestType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CrmRequestType>>;
    public postTypeUsingPOST(body: CrmRequestType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postTypeUsingPOST.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CrmRequestType>('post',`${this.basePath}/crmrequests/types`,
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
     * putCrmRequestById
     * 
     * @param body crmRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putCrmRequestByIdUsingPUT(body: CrmRequest, observe?: 'body', reportProgress?: boolean): Observable<CrmRequest>;
    public putCrmRequestByIdUsingPUT(body: CrmRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CrmRequest>>;
    public putCrmRequestByIdUsingPUT(body: CrmRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CrmRequest>>;
    public putCrmRequestByIdUsingPUT(body: CrmRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putCrmRequestByIdUsingPUT.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CrmRequest>('put',`${this.basePath}/crmrequests`,
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
     * putType
     * 
     * @param body crmRequestType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putTypeUsingPUT(body: CrmRequestType, observe?: 'body', reportProgress?: boolean): Observable<CrmRequestType>;
    public putTypeUsingPUT(body: CrmRequestType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CrmRequestType>>;
    public putTypeUsingPUT(body: CrmRequestType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CrmRequestType>>;
    public putTypeUsingPUT(body: CrmRequestType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putTypeUsingPUT.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CrmRequestType>('put',`${this.basePath}/crmrequests/types`,
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
     * Servicio de búsqueda de solicitudes
     * 
     * @param body filterRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchUsingPOST1(body: Filter, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public searchUsingPOST1(body: Filter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public searchUsingPOST1(body: Filter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public searchUsingPOST1(body: Filter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling searchUsingPOST1.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/crmrequests/search`,
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