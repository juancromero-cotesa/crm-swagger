/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.0 ***  Situation *** - Se redefine la clase con los atributos _id y situacionType situacionType será un objeto del tipo SituacionType que definirá la situación  SituationType *** - Se define la clase SituationType y sus métodos  Interactions *** - Se elimina el método filter - En el método de añadir situación se envía y retorna la situación añadida , no la interacción completa (/interactions/{id}/situation)  CrmRequest *** - Se elimina el método filter - se deprecan los métodos get y post de notes - se depreca el método get de sitauciones de una solicitud '/crmrequests/situations/{crmRequestId}  CensusData - se modifican los tipos devueltos para ajustarlos a lo importado desde padrón  ## 0.3.1 ***  Integrations *** - Se define la clase de integraciones y los métodos crud - PTE PARAMETROS GET PARA UPDATE O DELETE O INSERT  Persons *** - Se definen las nuevas propiedades para soportar el catálogo de importaciones - Se define nuevo método en API para obtener los datos de una integración de una persona - Se establece la propiedad segmentation como un array de SegmentItem  Segments *** - Se redefine la clase segments, se añade la propiedad ruleSet que establecerá las reglas para añadir el segmento a una persona - Se defina la clase SegmentItem - Se definen los métodos de la api de segmentos  Datasources *** - Se añade la propiedad orderBy como array de campos de ordenación del resultado  WidgetTable *** -  Añade la clase WidgetTable para su uso en los métodos widget  ## 0.3.2 ***  Address *** - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  Dashboards *** - Se definen los métodos crud de dashboards - se define el esquema de dashboard   UsersDashboards *** - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  Datasources *** - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  Widgets *** - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       WidgetChart *** - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  DataSerie *** - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  Persons *** - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   Users *** - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  InteractionTypes , CrmRequestTypes *** - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  users *** Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ServiceResponseError *** Se redefine el esquema del error en las respuestas para alinearlo con back  Personas *** Documenta núevos métodos lock y unlock ya implementados  CensusViaType *** Se define el modelo  CensusEntity *** Se define el modelo  Addresses *** Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  Census Data *** europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   Addresses ***   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  Persons ***   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  Users *** Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  Person *** Se añade la propiedad electronicOffice a la persona  AdminstrativeFile *** Define el esquema de expediente administrativo de experta importado desde ETL  ElectronicOffice *** Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona 
 *
 * OpenAPI spec version: 0.3.7-PRIVATE
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

import { ServiceResponseError } from '../model/serviceResponseError';
import { SituationType } from '../model/situationType';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TiposDeSituacionesService {

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
     * Obtiene las situaciones disponibles
     * Obtiene las situaciones disponibles
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public situationTypeGet(observe?: 'body', reportProgress?: boolean): Observable<Array<SituationType>>;
    public situationTypeGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SituationType>>>;
    public situationTypeGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SituationType>>>;
    public situationTypeGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<SituationType>>('get',`${this.basePath}/situationType`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Crea un nuevo tipo de situación
     * Crea un nuevo tipo de situación
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public situationTypePost(body: SituationType, observe?: 'body', reportProgress?: boolean): Observable<SituationType>;
    public situationTypePost(body: SituationType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SituationType>>;
    public situationTypePost(body: SituationType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SituationType>>;
    public situationTypePost(body: SituationType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling situationTypePost.');
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

        return this.httpClient.request<SituationType>('post',`${this.basePath}/situationType`,
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
     * Elimina el tipo de situación
     * Elimina el tipo de situación indicado en el path
     * @param situationTypeId identificador del tipo de situación
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public situationTypeSituationTypeIdDelete(situationTypeId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public situationTypeSituationTypeIdDelete(situationTypeId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public situationTypeSituationTypeIdDelete(situationTypeId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public situationTypeSituationTypeIdDelete(situationTypeId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (situationTypeId === null || situationTypeId === undefined) {
            throw new Error('Required parameter situationTypeId was null or undefined when calling situationTypeSituationTypeIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/situationType/${encodeURIComponent(String(situationTypeId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene  tipo de situación
     * Obtiene el tipo de situación  por su ID
     * @param situationTypeId identificador del tipo de situación
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public situationTypeSituationTypeIdGet(situationTypeId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public situationTypeSituationTypeIdGet(situationTypeId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public situationTypeSituationTypeIdGet(situationTypeId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public situationTypeSituationTypeIdGet(situationTypeId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (situationTypeId === null || situationTypeId === undefined) {
            throw new Error('Required parameter situationTypeId was null or undefined when calling situationTypeSituationTypeIdGet.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/situationType/${encodeURIComponent(String(situationTypeId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Actualiza un tipo de situación
     * Actualiza un tipo de situación
     * @param body 
     * @param situationTypeId identificador del tipo de situación
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public situationTypeSituationTypeIdPut(body: SituationType, situationTypeId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public situationTypeSituationTypeIdPut(body: SituationType, situationTypeId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public situationTypeSituationTypeIdPut(body: SituationType, situationTypeId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public situationTypeSituationTypeIdPut(body: SituationType, situationTypeId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling situationTypeSituationTypeIdPut.');
        }

        if (situationTypeId === null || situationTypeId === undefined) {
            throw new Error('Required parameter situationTypeId was null or undefined when calling situationTypeSituationTypeIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/situationType/${encodeURIComponent(String(situationTypeId))}`,
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
     * Obtiene sucesoras
     * Obtiene los tipos de situaciones sucesoras del la indicada por el parámertros para el usuario logado
     * @param situationTypeId identificador del tipo de situación
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public situationTypeSuccessorsSituationTypeIdGet(situationTypeId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<SituationType>>;
    public situationTypeSuccessorsSituationTypeIdGet(situationTypeId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SituationType>>>;
    public situationTypeSuccessorsSituationTypeIdGet(situationTypeId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SituationType>>>;
    public situationTypeSuccessorsSituationTypeIdGet(situationTypeId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (situationTypeId === null || situationTypeId === undefined) {
            throw new Error('Required parameter situationTypeId was null or undefined when calling situationTypeSuccessorsSituationTypeIdGet.');
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

        return this.httpClient.request<Array<SituationType>>('get',`${this.basePath}/situationType/successors/${encodeURIComponent(String(situationTypeId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
