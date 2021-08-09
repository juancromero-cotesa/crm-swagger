/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.0 ***  Situation *** - Se redefine la clase con los atributos _id y situacionType situacionType será un objeto del tipo SituacionType que definirá la situación  SituationType *** - Se define la clase SituationType y sus métodos  Interactions *** - Se elimina el método filter - En el método de añadir situación se envía y retorna la situación añadida , no la interacción completa (/interactions/{id}/situation)  CrmRequest *** - Se elimina el método filter - se deprecan los métodos get y post de notes - se depreca el método get de sitauciones de una solicitud '/crmrequests/situations/{crmRequestId}  CensusData - se modifican los tipos devueltos para ajustarlos a lo importado desde padrón  ## 0.3.1 ***  Integrations *** - Se define la clase de integraciones y los métodos crud - PTE PARAMETROS GET PARA UPDATE O DELETE O INSERT  Persons *** - Se definen las nuevas propiedades para soportar el catálogo de importaciones - Se define nuevo método en API para obtener los datos de una integración de una persona - Se establece la propiedad segmentation como un array de SegmentItem  Segments *** - Se redefine la clase segments, se añade la propiedad ruleSet que establecerá las reglas para añadir el segmento a una persona - Se defina la clase SegmentItem - Se definen los métodos de la api de segmentos  Datasources *** - Se añade la propiedad orderBy como array de campos de ordenación del resultado  WidgetTable *** -  Añade la clase WidgetTable para su uso en los métodos widget  ## 0.3.2 ***  Address *** - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  Dashboards *** - Se definen los métodos crud de dashboards - se define el esquema de dashboard   UsersDashboards *** - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  Datasources *** - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  Widgets *** - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       WidgetChart *** - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  DataSerie *** - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  Persons *** - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   Users *** - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  InteractionTypes , CrmRequestTypes *** - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  users *** Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ServiceResponseError *** Se redefine el esquema del error en las respuestas para alinearlo con back  Personas *** Documenta núevos métodos lock y unlock ya implementados  CensusViaType *** Se define el modelo  CensusEntity *** Se define el modelo  Addresses *** Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  Census Data *** europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   Addresses ***   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  Persons ***   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  Users *** Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  Person *** Se añade la propiedad electronicOffice a la persona  AdminstrativeFile *** Define el esquema de expediente administrativo de experta importado desde ETL  ElectronicOffice *** Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona  ##0.3.7 *** 
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

import { CrmParam } from '../model/crmParam';
import { CrmParamType } from '../model/crmParamType';
import { ServiceResponseError } from '../model/serviceResponseError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ParametrizacinService {

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
     * Tipos de Parámetros
     * Obtiene los distintos tipos de parámetros de la aplicación.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public paramsGet(observe?: 'body', reportProgress?: boolean): Observable<Array<CrmParamType>>;
    public paramsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CrmParamType>>>;
    public paramsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CrmParamType>>>;
    public paramsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<CrmParamType>>('get',`${this.basePath}/params`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Parámetros de la aplicación
     * Obtiene los distintos valores de parametrización de la aplicación por su tipo. - Tipos de personas - Tipos de documentos
     * @param paramType 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public paramsParamTypeGet(paramType: CrmParamType, observe?: 'body', reportProgress?: boolean): Observable<Array<CrmParam>>;
    public paramsParamTypeGet(paramType: CrmParamType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CrmParam>>>;
    public paramsParamTypeGet(paramType: CrmParamType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CrmParam>>>;
    public paramsParamTypeGet(paramType: CrmParamType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (paramType === null || paramType === undefined) {
            throw new Error('Required parameter paramType was null or undefined when calling paramsParamTypeGet.');
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

        return this.httpClient.request<Array<CrmParam>>('get',`${this.basePath}/params/${encodeURIComponent(String(paramType))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Eliminar parámetro
     * Elimina el parámetro por su nombre para el tipo enviado en el path
     * @param paramType 
     * @param paramName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public paramsParamTypeParamNameDelete(paramType: CrmParamType, paramName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public paramsParamTypeParamNameDelete(paramType: CrmParamType, paramName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public paramsParamTypeParamNameDelete(paramType: CrmParamType, paramName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public paramsParamTypeParamNameDelete(paramType: CrmParamType, paramName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (paramType === null || paramType === undefined) {
            throw new Error('Required parameter paramType was null or undefined when calling paramsParamTypeParamNameDelete.');
        }

        if (paramName === null || paramName === undefined) {
            throw new Error('Required parameter paramName was null or undefined when calling paramsParamTypeParamNameDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/params/${encodeURIComponent(String(paramType))}/${encodeURIComponent(String(paramName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Parámetros de la aplicación
     * Crea un nuevo parámerto - Tipos de personas - Tipos de documentos
     * @param body 
     * @param paramType 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public paramsParamTypePost(body: CrmParam, paramType: CrmParamType, observe?: 'body', reportProgress?: boolean): Observable<CrmParam>;
    public paramsParamTypePost(body: CrmParam, paramType: CrmParamType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CrmParam>>;
    public paramsParamTypePost(body: CrmParam, paramType: CrmParamType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CrmParam>>;
    public paramsParamTypePost(body: CrmParam, paramType: CrmParamType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling paramsParamTypePost.');
        }

        if (paramType === null || paramType === undefined) {
            throw new Error('Required parameter paramType was null or undefined when calling paramsParamTypePost.');
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

        return this.httpClient.request<CrmParam>('post',`${this.basePath}/params/${encodeURIComponent(String(paramType))}`,
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
     * Actualiza un parámetro
     * Actualiza el parámetro recibido
     * @param body 
     * @param paramType 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public paramsParamTypePut(body: CrmParam, paramType: CrmParamType, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public paramsParamTypePut(body: CrmParam, paramType: CrmParamType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public paramsParamTypePut(body: CrmParam, paramType: CrmParamType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public paramsParamTypePut(body: CrmParam, paramType: CrmParamType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling paramsParamTypePut.');
        }

        if (paramType === null || paramType === undefined) {
            throw new Error('Required parameter paramType was null or undefined when calling paramsParamTypePut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/params/${encodeURIComponent(String(paramType))}`,
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
