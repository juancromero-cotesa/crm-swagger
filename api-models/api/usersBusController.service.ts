/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.2 ***  ### Address - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  ### Dashboards - Se definen los métodos crud de dashboards - se define el esquema de dashboard   ### UsersDashboards - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  ### Datasources - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  ### Widgets - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       ### WidgetChart - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  ### DataSerie - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  ### Persons - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   ### Users - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  ### InteractionTypes , CrmRequestTypes - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  ### users Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ### ServiceResponseError Se redefine el esquema del error en las respuestas para alinearlo con back  ### Personas Documenta núevos métodos lock y unlock ya implementados  ### CensusViaType Se define el modelo  ### CensusEntity Se define el modelo  ### Addresses Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  ### Census Data europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   ### Addresses   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  ### Persons   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  ### Users Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  ### Person Se añade la propiedad electronicOffice a la persona  ### AdministrativeFile Define el esquema de expediente administrativo de experta importado desde ETL  ### ElectronicOffice Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona  ## 0.3.7 ***  ### CensusData Se añade la propiedad domicileCode  ##0.3.8 ***  ### Datasources  Incorpora método run Modifica modelo Datasource, Propiedad rules de tipo RuleSet, Propiedad group de tipo GroupOperator. Propiedad projectionField de tipo CustomField. Propiedad orderBy de tipo CustomFieldSort. Se modifica el modelo RuleSet Se añaden los métodos run y run/{datasourceId} Se definene los modelos GroupOperator, CustomField,GroupField,CustomFieldSort  ### USERBUS API Creación del api para las consultas de usuarios del bus. Métodos públicos que requieren de una apikey especifica para el bus Método POST /userbus guarda el usuario que llega por el body deshabilitado. Método GET /usersbus/{username}/{password} Busca usuario por username y password. Método GET /usersbus/doc/{docId} Busca usuario por numero de documento. Método GET /usersbus/tc/{idSgtc} Busca usuario por numero de tarjeta ciudadana asociada a la persona asociada al usuario. Método GET /usersbus/validusername/{username} Valida que una username sea valida.  ## 0.3.9 ***  ### CrmRequestType se renombra la propiedad bpsProcessDefinitionsId a businessProcessesDefinitionsIds  ### Preocesos de negocio Se elimina esquema BpsInstance  Se definen los métodos:    - GET/businessprocess/{businessprocessId}   - GET/businessprocess/{businessprocessId}/indicators   - GET/businessprocess/{businessprocessId}/instances   - GET/businessprocess/{businessprocessId}/instances/{instanceId}   - GET/businessprocess/{businessprocessId}/taskdefinitions  Se definen los esquemas:    - BusinessProcessDefinition   - BusinessProcessEntity   - BusinessProcessIndicator   - BusinessProcessIndicatorAlarm   - BusinessProcessInstance   - BusinessProcessTaskDefinition   - BusinessProcessTaskInstance   - BusinessProcessFormProperty 
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