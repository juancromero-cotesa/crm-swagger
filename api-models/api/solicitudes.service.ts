/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.2 ***  ### Address - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  ### Dashboards - Se definen los métodos crud de dashboards - se define el esquema de dashboard   ### UsersDashboards - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  ### Datasources - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  ### Widgets - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       ### WidgetChart - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  ### DataSerie - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  ### Persons - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   ### Users - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  ### InteractionTypes , CrmRequestTypes - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  ### users Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ### ServiceResponseError Se redefine el esquema del error en las respuestas para alinearlo con back  ### Personas Documenta núevos métodos lock y unlock ya implementados  ### CensusViaType Se define el modelo  ### CensusEntity Se define el modelo  ### Addresses Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  ### Census Data europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   ### Addresses   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  ### Persons   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  ### Users Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  ### Person Se añade la propiedad electronicOffice a la persona  ### AdministrativeFile Define el esquema de expediente administrativo de experta importado desde ETL  ### ElectronicOffice Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona  ## 0.3.7 ***  ### CensusData Se añade la propiedad domicileCode  ##0.3.8 ***  ### Datasources  Incorpora método run Modifica modelo Datasource, Propiedad rules de tipo RuleSet, Propiedad group de tipo GroupOperator. Propiedad projectionField de tipo CustomField. Propiedad orderBy de tipo CustomFieldSort. Se modifica el modelo RuleSet Se añaden los métodos run y run/{datasourceId} Se definene los modelos GroupOperator, CustomField,GroupField,CustomFieldSort  ### USERBUS API Creación del api para las consultas de usuarios del bus. Métodos públicos que requieren de una apikey especifica para el bus Método POST /userbus guarda el usuario que llega por el body deshabilitado. Método GET /usersbus/{username}/{password} Busca usuario por username y password. Método GET /usersbus/doc/{docId} Busca usuario por numero de documento. Método GET /usersbus/tc/{idSgtc} Busca usuario por numero de tarjeta ciudadana asociada a la persona asociada al usuario. Método GET /usersbus/validusername/{username} Valida que una username sea valida.  ## 0.3.9 ***  ### DataSources se renombra la propiedad rules a ruleSet se renombra la propiedad projectionField a projectionFields   ### DataSourceQuery Se elimina el esquema DataSourceQuery  ### CrmRequestType se renombra la propiedad bpsProcessDefinitionsId a businessProcessesDefinitionsIds  ### Procesos de negocio Se elimina esquema BpsInstance   Se definen los métodos    - GET/businessprocess/{businessprocessId}   - GET/businessprocess/{businessprocessId}/indicators   - GET/businessprocess/{businessprocessId}/instances   - GET/businessprocess/{businessprocessId}/instances/{instanceId}   - GET/businessprocess/{businessprocessId}/taskdefinitions  Se definen los esquemas   - BusinessProcessDefinition   - BusinessProcessEntity   - BusinessProcessIndicator   - BusinessProcessIndicatorAlarm   - BusinessProcessInstance   - BusinessProcessTaskDefinition   - BusinessProcessTaskInstance   - BusinessProcessFormProperty    ## 0.4.0 ***  ### CrmRequest bpsProcessInstances se renombra como businessProcessesInstancesIds y pasa a ser un array de strings 
 *
 * OpenAPI spec version: 0.4.0-PRIVATE
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

import { BusinessProcessInstance } from '../model/businessProcessInstance';
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
    public findBpsProcessInstancesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BusinessProcessInstance>>;
    public findBpsProcessInstancesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BusinessProcessInstance>>>;
    public findBpsProcessInstancesByIdCrmRequestUsingGET(crmRequestId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BusinessProcessInstance>>>;
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

        return this.httpClient.request<Array<BusinessProcessInstance>>('get',`${this.basePath}/crmrequests/${encodeURIComponent(String(crmRequestId))}/bpsprocess`,
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
