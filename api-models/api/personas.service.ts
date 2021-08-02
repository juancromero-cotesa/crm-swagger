/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  ## 0.2.2 *** - Incluye enpoints de grupos  ## 0.2.3 *** - Incluye método para la obtención de literales  ## 0.2.4 *** - Añade métodos de búsqueda de personas - Añade esquemas de filtros para su uso con personas pero que serán de uso global en cualquier fitrado paginado - Añade permisos a apikeys - Añade métodos de interacciones  ## 0.2.5 *** - Renombra Permissions como CrmPermissions por entrar en conflicto con interfaz Permissions de Typescript - Renombra FeaturePermissions como CrmFeaturePermissions  - Elimina estructura AllOf cuando se usa para añadir descripción  - Establece elementos obligatorios en el esquema de ApiKey - Añade endpoint para la obtención de parámetros de la aplicación - Añade interactionsStatistic en el esquema de persona para almacenar estadisticas de interacciones - Añade esquema interactionStatistic como elementos del array de interactionsStatistic - Se elimina UserRequest y se envía un usuario en post - Modifica request de búsqueda de personas - Añade métodos de parametrización - Establece los métodos de contacto como parámetros  - Establece los tipos de documentos como parámetros  - Establece los tipos de personas como parámetros - Establece los tipos de direcciones como parámetros  - Establece los géneros de personas como parámetros  ## 0.2.6 *** - Añade método de obtención de persona por email - Añade ejemplo de esquema de filtro   - Añade requeridos en persona personType y name  - Renombra esquema Roles a Role - Elimina de unidad organizativa el padre y lo referencia mediante su ID ## 0.2.7 *** - Añade flag de borrado lógico a personas - añade fecha de borrado lógico a personas - Modifica la respuesta de retorno de la eliminación lógica de persona - Redefine el modelo OrganizationalUnit - Incorpora el método ya desarrollado /organization/parents - Define nueva estructura de resultados de búsquedas paginadas - Define el método search de búsqueda de interacciones paginadas - Define la respuesta del filtro de auditoría como SearchResponse - Define el modelo de auditoría - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Nuevos métodos de búsqueda para person, interaction, crmrequest y audit - Modifica la estructura de filter añade metadatas y operator - añadidos métodos de solicitudes ya desarrollados (10%) - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Añade comentarios a las solicitudes (en la api actual está como notes)     - Añade CustomForm, customFormData, active, createDate y lastModifiedDate a CrmRequest - CrmRequestType - Se modifica summary por name. Falta el campo identificator en la API se añade OrganizationalUnit - Añade método de obtencion de avatar en personas     - Añade método de obtencion de logo en estructura organizativa     ## 0.2.8 *** - Incorpora todos los métodos importando Swagger 2.0 al 16/04/2021 - Se deprecan los métodos de filtro de auditoria, personas, interacciones y solicitudes - Se deprecan los métodos de obtener y crear notas, se sustituyen por comments - Se depreca la entidad Note -  CUSTOMFORMS *** - Se deprecan los métodos de obtener customform por name y por type - Se especifica el retorno correcto en el delete - Se añade la propiedad _id y se depreca la propiedad type -  DATASOURCES *** - Se añaden definiones de métodos ya implementados. Necesario repasar - Se añade el atributo descripción al datasource - Se renombra el atributo query como ruleSet - Se añade el atributo mongoQuery como string - Se añade el atributo projection coo array de strings - Se añade el atributo OrganizationalUnitAllowed - Se añade el atributo userOwner  Uso de interfaz CollectionName - El método /datasource/collectionsnames retorna un array de CollectionName (Ahora retorna un ha-shmap, valorar si es un cambio sencillo. Si no lo es es posible hacerlo en front) - Se cambia el tipo del atributo collection a CollectionName  -  ExternalAplication *** - Se establece el _id como ObjectID - CrmRequest *** - Se añade la propiedad details - Se añade la propiedad subjectId del tipo Person que será pa persona propietaria de la solicitud. Será el ObjectID de la persona - Comment *** - Se añade la propiedad user del tipo UserBasic - Interacciones *** - Se depreca get interactions - Widgets *** - se definene las clases Widget, WidgetChart e WidgetIndicator - Métodos crud de widgets - OrganizationUnit *** - Se renombra la OrganizationUnit a OrganizationalUnit - Se renombra la propiedad organizationUnitType a organizationalUnitType - OrganizationUnitType *** - Se renombra la clase a OrganizationalUnitType   ### 0.2.9 ***  DATASOURCES *** - Se definen los modelos Rule y RuleSet - Se define el tipo de la propiedad ruleset como un objeto del tipo Rule o Ruleset  APIKEYS *** - Se añade la propiedad roles como array de Roles que almacena los roles de una apiKey  ## 0.3.0 ***  Situation *** - Se redefine la clase con los atributos _id y situacionType situacionType será un objeto del tipo SituacionType que definirá la situación  SituationType *** - Se define la clase SituationType y sus métodos  Interactions *** - Se elimina el método filter - En el método de añadir situación se envía y retorna la situación añadida , no la interacción completa (/interactions/{id}/situation)  CrmRequest *** - Se elimina el método filter - se deprecan los métodos get y post de notes - se depreca el método get de sitauciones de una solicitud '/crmrequests/situations/{crmRequestId}  CensusData - se modifican los tipos devueltos para ajustarlos a lo importado desde padrón    ## 0.3.1 ***  Integrations *** - Se define la clase de integraciones y los métodos crud - PTE PARAMETROS GET PARA UPDATE O DELETE O INSERT  Persons *** - Se definen las nuevas propiedades para soportar el catálogo de importaciones - Se define nuevo método en API para obtener los datos de una integración de una persona - Se establece la propiedad segmentation como un array de SegmentItem  Segments *** - Se redefine la clase segments, se añade la propiedad ruleSet que establecerá las reglas para añadir el segmento a una persona, expirationTime y minThreshold que será el minimo de ocurrencias necesarias para que se aplique el segmento - Se defina la clase SegmentItem - Se definen los métodos de la api de segmentos  Datasources *** - Se añade la propiedad orderBy como array de campos de ordenación del resultado  WidgetTable *** -  Añade la clase WidgetTable para su uso en los métodos widget 
 *
 * OpenAPI spec version: 0.3.1-PRIVATE
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

import { AnyValue } from '../model/anyValue';
import { Avatar } from '../model/avatar';
import { Filter } from '../model/filter';
import { InlineResponse200 } from '../model/inlineResponse200';
import { PatchOperation } from '../model/patchOperation';
import { Person } from '../model/person';
import { SearchResponse } from '../model/searchResponse';
import { ServiceResponseError } from '../model/serviceResponseError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PersonasService {

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
     * retorna el avatar de una persona
     * 
     * @param ouId id de unidad organizativa
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organizationLogoOuIdGet(ouId: string, observe?: 'body', reportProgress?: boolean): Observable<Avatar>;
    public organizationLogoOuIdGet(ouId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Avatar>>;
    public organizationLogoOuIdGet(ouId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Avatar>>;
    public organizationLogoOuIdGet(ouId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ouId === null || ouId === undefined) {
            throw new Error('Required parameter ouId was null or undefined when calling organizationLogoOuIdGet.');
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

        return this.httpClient.request<Avatar>('get',`${this.basePath}/organization/logo/${encodeURIComponent(String(ouId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * retorna el avatar de una persona
     * 
     * @param personId Dirección de email
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsAvatarPersonIdGet(personId: string, observe?: 'body', reportProgress?: boolean): Observable<Avatar>;
    public personsAvatarPersonIdGet(personId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Avatar>>;
    public personsAvatarPersonIdGet(personId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Avatar>>;
    public personsAvatarPersonIdGet(personId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (personId === null || personId === undefined) {
            throw new Error('Required parameter personId was null or undefined when calling personsAvatarPersonIdGet.');
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

        return this.httpClient.request<Avatar>('get',`${this.basePath}/persons/avatar/${encodeURIComponent(String(personId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene una persona por su tarjeta ciudadana
     * Retorna una única persona
     * @param sgtcId ID de la tarjeta ciudadana
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsCardSgtcIdGet(sgtcId: string, observe?: 'body', reportProgress?: boolean): Observable<Person>;
    public personsCardSgtcIdGet(sgtcId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Person>>;
    public personsCardSgtcIdGet(sgtcId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Person>>;
    public personsCardSgtcIdGet(sgtcId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sgtcId === null || sgtcId === undefined) {
            throw new Error('Required parameter sgtcId was null or undefined when calling personsCardSgtcIdGet.');
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

        return this.httpClient.request<Person>('get',`${this.basePath}/persons/card/${encodeURIComponent(String(sgtcId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene una persona por su email
     * Retorna una única persona mediante el email con el que se registró
     * @param email Dirección de email
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsEmailEmailGet(email: string, observe?: 'body', reportProgress?: boolean): Observable<Person>;
    public personsEmailEmailGet(email: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Person>>;
    public personsEmailEmailGet(email: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Person>>;
    public personsEmailEmailGet(email: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling personsEmailEmailGet.');
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

        return this.httpClient.request<Person>('get',`${this.basePath}/persons/email/${encodeURIComponent(String(email))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Servicio de búsqueda de personas
     * Realiza una búsqueda de personas con los parámetros recibidos
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsFilterPost(body: Filter, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public personsFilterPost(body: Filter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public personsFilterPost(body: Filter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public personsFilterPost(body: Filter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling personsFilterPost.');
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

        return this.httpClient.request<InlineResponse200>('post',`${this.basePath}/persons/filter`,
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
     * Eliminar persona
     * Elimina la persona identificada en el path
     * @param personId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsPersonIdDelete(personId: string, observe?: 'body', reportProgress?: boolean): Observable<Person>;
    public personsPersonIdDelete(personId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Person>>;
    public personsPersonIdDelete(personId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Person>>;
    public personsPersonIdDelete(personId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (personId === null || personId === undefined) {
            throw new Error('Required parameter personId was null or undefined when calling personsPersonIdDelete.');
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

        return this.httpClient.request<Person>('delete',`${this.basePath}/persons/${encodeURIComponent(String(personId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener persona
     * Retorna una única persona por su id
     * @param personId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsPersonIdGet(personId: string, observe?: 'body', reportProgress?: boolean): Observable<Person>;
    public personsPersonIdGet(personId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Person>>;
    public personsPersonIdGet(personId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Person>>;
    public personsPersonIdGet(personId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (personId === null || personId === undefined) {
            throw new Error('Required parameter personId was null or undefined when calling personsPersonIdGet.');
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

        return this.httpClient.request<Person>('get',`${this.basePath}/persons/${encodeURIComponent(String(personId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * retorna lso datos de una imortación para la pernona
     * 
     * @param integrationId Id (nombre de la integración)
     * @param personId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsPersonIdIntegrationIntegrationIdGet(integrationId: string, personId: string, observe?: 'body', reportProgress?: boolean): Observable<AnyValue>;
    public personsPersonIdIntegrationIntegrationIdGet(integrationId: string, personId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AnyValue>>;
    public personsPersonIdIntegrationIntegrationIdGet(integrationId: string, personId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AnyValue>>;
    public personsPersonIdIntegrationIntegrationIdGet(integrationId: string, personId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling personsPersonIdIntegrationIntegrationIdGet.');
        }

        if (personId === null || personId === undefined) {
            throw new Error('Required parameter personId was null or undefined when calling personsPersonIdIntegrationIntegrationIdGet.');
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

        return this.httpClient.request<AnyValue>('get',`${this.basePath}/persons/${encodeURIComponent(String(personId))}/integration/${encodeURIComponent(String(integrationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Actualiza la persona con la operación recibida
     * Realiza la actualización de una persona. Permite modificar cualquiera de sus propiedades.
     * @param body Operación de actualización parcial sobre persona.
     * @param personId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsPersonIdPatch(body: PatchOperation, personId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public personsPersonIdPatch(body: PatchOperation, personId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public personsPersonIdPatch(body: PatchOperation, personId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public personsPersonIdPatch(body: PatchOperation, personId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling personsPersonIdPatch.');
        }

        if (personId === null || personId === undefined) {
            throw new Error('Required parameter personId was null or undefined when calling personsPersonIdPatch.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKey) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
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

        return this.httpClient.request<any>('patch',`${this.basePath}/persons/${encodeURIComponent(String(personId))}`,
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
     * Modificación de persona (Creación si no existe)
     * Actualiza la persona por su id con la persona recibida en body, si no existe el recurso
     * @param body objeto persona
     * @param personId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsPersonIdPut(body: Person, personId: string, observe?: 'body', reportProgress?: boolean): Observable<Person>;
    public personsPersonIdPut(body: Person, personId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Person>>;
    public personsPersonIdPut(body: Person, personId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Person>>;
    public personsPersonIdPut(body: Person, personId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling personsPersonIdPut.');
        }

        if (personId === null || personId === undefined) {
            throw new Error('Required parameter personId was null or undefined when calling personsPersonIdPut.');
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

        return this.httpClient.request<Person>('put',`${this.basePath}/persons/${encodeURIComponent(String(personId))}`,
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
     * Crear persona
     * Crea una nueva una persona, realizará las comprobaciones necesarias para no crear personas con identificadores duplicados (DNI, NIF, NIE).
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsPost(body: Person, observe?: 'body', reportProgress?: boolean): Observable<Person>;
    public personsPost(body: Person, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Person>>;
    public personsPost(body: Person, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Person>>;
    public personsPost(body: Person, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling personsPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKey) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
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

        return this.httpClient.request<Person>('post',`${this.basePath}/persons`,
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
     * método de búsqaueda mediante filtro en personas
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsSearchPost(body?: Filter, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public personsSearchPost(body?: Filter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public personsSearchPost(body?: Filter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public personsSearchPost(body?: Filter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<SearchResponse>('post',`${this.basePath}/persons/search`,
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
