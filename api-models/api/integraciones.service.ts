/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.2 ***  ### Address - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  ### Dashboards - Se definen los métodos crud de dashboards - se define el esquema de dashboard   ### UsersDashboards - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  ### Datasources - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  ### Widgets - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       ### WidgetChart - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  ### DataSerie - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  ### Persons - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   ### Users - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  ### InteractionTypes , CrmRequestTypes - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  ### users Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ### ServiceResponseError Se redefine el esquema del error en las respuestas para alinearlo con back  ### Personas Documenta núevos métodos lock y unlock ya implementados  ### CensusViaType Se define el modelo  ### CensusEntity Se define el modelo  ### Addresses Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  ### Census Data europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   ### Addresses   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  ### Persons   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  ### Users Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  ### Person Se añade la propiedad electronicOffice a la persona  ### AdministrativeFile Define el esquema de expediente administrativo de experta importado desde ETL  ### ElectronicOffice Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona  ## 0.3.7 ***  ### CensusData Se añade la propiedad domicileCode  ##0.3.8 ***  ### Datasources  Incorpora método run Modifica modelo Datasource, Propiedad rules de tipo RuleSet, Propiedad group de tipo GroupOperator. Propiedad projectionField de tipo CustomField. Propiedad orderBy de tipo CustomFieldSort. Se modifica el modelo RuleSet Se añaden los métodos run y run/{datasourceId} Se definene los modelos GroupOperator, CustomField,GroupField,CustomFieldSort  ### USERBUS API Creación del api para las consultas de usuarios del bus. Métodos públicos que requieren de una apikey especifica para el bus Método POST /userbus guarda el usuario que llega por el body deshabilitado. Método GET /usersbus/{username}/{password} Busca usuario por username y password. Método GET /usersbus/doc/{docId} Busca usuario por numero de documento. Método GET /usersbus/tc/{idSgtc} Busca usuario por numero de tarjeta ciudadana asociada a la persona asociada al usuario. Método GET /usersbus/validusername/{username} Valida que una username sea valida.  ## 0.3.9 ***  ### DataSources se renombra la propiedad rules a ruleSet   ### DataSourceQuery Se elimina el esquema DataSourceQuery  ### CrmRequestType se renombra la propiedad bpsProcessDefinitionsId a businessProcessesDefinitionsIds  ### Procesos de negocio Se elimina esquema BpsInstance  Se definen los métodos:    - GET/businessprocess/{businessprocessId}   - GET/businessprocess/{businessprocessId}/indicators   - GET/businessprocess/{businessprocessId}/instances   - GET/businessprocess/{businessprocessId}/instances/{instanceId}   - GET/businessprocess/{businessprocessId}/taskdefinitions  Se definen los esquemas:    - BusinessProcessDefinition   - BusinessProcessEntity   - BusinessProcessIndicator   - BusinessProcessIndicatorAlarm   - BusinessProcessInstance   - BusinessProcessTaskDefinition   - BusinessProcessTaskInstance   - BusinessProcessFormProperty 
 *
 * OpenAPI spec version: 0.3.9-PRIVATE
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
import { Integration } from '../model/integration';
import { ModelObject } from '../model/modelObject';
import { ServiceResponseError } from '../model/serviceResponseError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IntegracionesService {

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
     * Obtiene el catálogo de integraciones
     * Obtiene todas las integraciones sin paginar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Integration>>;
    public integrationsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Integration>>>;
    public integrationsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Integration>>>;
    public integrationsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<Integration>>('get',`${this.basePath}/integrations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Elimina todos los datos de una  integración
     * Elimina los datos de una integración realizada
     * @param integrationId nombre de la integración (id)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsIntegrationIdDataDelete(integrationId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public integrationsIntegrationIdDataDelete(integrationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public integrationsIntegrationIdDataDelete(integrationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public integrationsIntegrationIdDataDelete(integrationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling integrationsIntegrationIdDataDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/integrations/${encodeURIComponent(String(integrationId))}/data`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene los datos de una integración
     * Obtiene los todos los datos de una integración externa por su id
     * @param integrationId nombre de la integración (id)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsIntegrationIdDataGet(integrationId: string, observe?: 'body', reportProgress?: boolean): Observable<AnyValue>;
    public integrationsIntegrationIdDataGet(integrationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AnyValue>>;
    public integrationsIntegrationIdDataGet(integrationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AnyValue>>;
    public integrationsIntegrationIdDataGet(integrationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling integrationsIntegrationIdDataGet.');
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

        return this.httpClient.request<AnyValue>('get',`${this.basePath}/integrations/${encodeURIComponent(String(integrationId))}/data`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Carga datos de de una integración
     * Realiza una carga de datos de integración *** Por defecto inserta todos los registros, este comportamiento se puede cambiar con el parámetro mode.  Deberá realizar las siguientes comprobaciones en los datos a importar - Llega en el atributo integrationName con el nombre de la integración y esta existe - Llegan los valores definidos en la integración comoperson claves (key)  Para cada registro de importación deberá anotar a cada persona en su propiedad integrations que es un array - El nombre de la importación - la fecha de importación  Para acceder a la persona se usará la relación definida en la integración 
     * @param body 
     * @param mode Modo de carga de los datos de integración, pueden ser - reset - Elimina el contenido actual y carga el nuevo - upsert - Inserta o actualiza los datos por la clave especificada - insert - Inserta todo el contenido 
     * @param integrationId nombre de la integración (id)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsIntegrationIdDataPost(body: ModelObject, mode: string, integrationId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public integrationsIntegrationIdDataPost(body: ModelObject, mode: string, integrationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public integrationsIntegrationIdDataPost(body: ModelObject, mode: string, integrationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public integrationsIntegrationIdDataPost(body: ModelObject, mode: string, integrationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling integrationsIntegrationIdDataPost.');
        }

        if (mode === null || mode === undefined) {
            throw new Error('Required parameter mode was null or undefined when calling integrationsIntegrationIdDataPost.');
        }

        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling integrationsIntegrationIdDataPost.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (mode !== undefined && mode !== null) {
            queryParameters = queryParameters.set('mode', <any>mode);
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

        return this.httpClient.request<any>('post',`${this.basePath}/integrations/${encodeURIComponent(String(integrationId))}/data`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Elimina integración
     * Elimina una configuración de integración
     * @param integrationId nombre de la integración (id)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsIntegrationIdDelete(integrationId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public integrationsIntegrationIdDelete(integrationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public integrationsIntegrationIdDelete(integrationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public integrationsIntegrationIdDelete(integrationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling integrationsIntegrationIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/integrations/${encodeURIComponent(String(integrationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene una integración
     * Obtiene una integración externa por su id
     * @param integrationId nombre de la integración (id)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsIntegrationIdGet(integrationId: string, observe?: 'body', reportProgress?: boolean): Observable<Integration>;
    public integrationsIntegrationIdGet(integrationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Integration>>;
    public integrationsIntegrationIdGet(integrationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Integration>>;
    public integrationsIntegrationIdGet(integrationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling integrationsIntegrationIdGet.');
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

        return this.httpClient.request<Integration>('get',`${this.basePath}/integrations/${encodeURIComponent(String(integrationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Actualiza integración
     * Actualiza una configuración de integración
     * @param body 
     * @param integrationId nombre de la integración (id)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsIntegrationIdPut(body: Integration, integrationId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public integrationsIntegrationIdPut(body: Integration, integrationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public integrationsIntegrationIdPut(body: Integration, integrationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public integrationsIntegrationIdPut(body: Integration, integrationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling integrationsIntegrationIdPut.');
        }

        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling integrationsIntegrationIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/integrations/${encodeURIComponent(String(integrationId))}`,
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
     * Nueva configuración de integración
     * Crea una nueva configuración de integración
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public integrationsPost(body: Integration, observe?: 'body', reportProgress?: boolean): Observable<Integration>;
    public integrationsPost(body: Integration, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Integration>>;
    public integrationsPost(body: Integration, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Integration>>;
    public integrationsPost(body: Integration, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling integrationsPost.');
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

        return this.httpClient.request<Integration>('post',`${this.basePath}/integrations`,
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
