/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.   # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.0 ***  Situation *** - Se redefine la clase con los atributos _id y situacionType situacionType será un objeto del tipo SituacionType que definirá la situación  SituationType *** - Se define la clase SituationType y sus métodos  Interactions *** - Se elimina el método filter - En el método de añadir situación se envía y retorna la situación añadida , no la interacción completa (/interactions/{id}/situation)  CrmRequest *** - Se elimina el método filter - se deprecan los métodos get y post de notes - se depreca el método get de sitauciones de una solicitud '/crmrequests/situations/{crmRequestId}  CensusData - se modifican los tipos devueltos para ajustarlos a lo importado desde padrón  ## 0.3.1 ***  Integrations *** - Se define la clase de integraciones y los métodos crud - PTE PARAMETROS GET PARA UPDATE O DELETE O INSERT  Persons *** - Se definen las nuevas propiedades para soportar el catálogo de importaciones - Se define nuevo método en API para obtener los datos de una integración de una persona - Se establece la propiedad segmentation como un array de SegmentItem  Segments *** - Se redefine la clase segments, se añade la propiedad ruleSet que establecerá las reglas para añadir el segmento a una persona - Se defina la clase SegmentItem - Se definen los métodos de la api de segmentos  Datasources *** - Se añade la propiedad orderBy como array de campos de ordenación del resultado  WidgetTable *** -  Añade la clase WidgetTable para su uso en los métodos widget  ## 0.3.2 ***  Address *** - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  Dashboards *** - Se definen los métodos crud de dashboards - se define el esquema de dashboard   UsersDashboards *** - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  Datasources *** - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  Widgets *** - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       WidgetChart *** - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  DataSerie *** - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  Persons *** - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   Users *** - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  InteractionTypes , CrmRequestTypes *** - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  users *** Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ServiceResponseError *** Se redefine el esquema del error en las respuestas para alinearlo con back  Personas *** Documenta núevos métodos lock y unlock ya implementados  CensusViaType *** Se define el modelo  CensusEntity *** Se define el modelo  Addresses *** Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  Census Data *** europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   Addresses ***   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  Persons ***   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  Users *** Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el userDashboard recibido en el body 
 *
 * OpenAPI spec version: 0.3.5-PRIVATE
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

import { Dashboard } from '../model/dashboard';
import { ExternalAplication } from '../model/externalAplication';
import { ServiceResponseError } from '../model/serviceResponseError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DashboardsService {

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
     * Elimina aplicación externa
     * Elimina un registro de aplicación externa
     * @param dashboardId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dashboardsDashboardIdDelete(dashboardId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public dashboardsDashboardIdDelete(dashboardId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public dashboardsDashboardIdDelete(dashboardId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public dashboardsDashboardIdDelete(dashboardId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dashboardId === null || dashboardId === undefined) {
            throw new Error('Required parameter dashboardId was null or undefined when calling dashboardsDashboardIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/dashboards/${encodeURIComponent(String(dashboardId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene un dashboard
     * Obtiene una dashboard por su id
     * @param dashboardId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dashboardsDashboardIdGet(dashboardId: string, observe?: 'body', reportProgress?: boolean): Observable<Dashboard>;
    public dashboardsDashboardIdGet(dashboardId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Dashboard>>;
    public dashboardsDashboardIdGet(dashboardId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Dashboard>>;
    public dashboardsDashboardIdGet(dashboardId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dashboardId === null || dashboardId === undefined) {
            throw new Error('Required parameter dashboardId was null or undefined when calling dashboardsDashboardIdGet.');
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

        return this.httpClient.request<Dashboard>('get',`${this.basePath}/dashboards/${encodeURIComponent(String(dashboardId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * actualiza dashboard
     * Actualiza un dashboard
     * @param body 
     * @param dashboardId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dashboardsDashboardIdPut(body: Dashboard, dashboardId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public dashboardsDashboardIdPut(body: Dashboard, dashboardId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public dashboardsDashboardIdPut(body: Dashboard, dashboardId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public dashboardsDashboardIdPut(body: Dashboard, dashboardId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling dashboardsDashboardIdPut.');
        }

        if (dashboardId === null || dashboardId === undefined) {
            throw new Error('Required parameter dashboardId was null or undefined when calling dashboardsDashboardIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/dashboards/${encodeURIComponent(String(dashboardId))}`,
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
     * Obtiene los dashboards del usuario
     * Obtiene todos los dashboards del usuario
     * @param ou retorna los dashboards del usuario mas los de su unidad organizativa
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dashboardsGet(ou?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<Dashboard>>;
    public dashboardsGet(ou?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Dashboard>>>;
    public dashboardsGet(ou?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Dashboard>>>;
    public dashboardsGet(ou?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (ou !== undefined && ou !== null) {
            queryParameters = queryParameters.set('ou', <any>ou);
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

        return this.httpClient.request<Array<Dashboard>>('get',`${this.basePath}/dashboards`,
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
     * Crea un nuevo dashboard
     * Crea una nuevo dashboard
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dashboardsPost(body: Dashboard, observe?: 'body', reportProgress?: boolean): Observable<ExternalAplication>;
    public dashboardsPost(body: Dashboard, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExternalAplication>>;
    public dashboardsPost(body: Dashboard, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExternalAplication>>;
    public dashboardsPost(body: Dashboard, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling dashboardsPost.');
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

        return this.httpClient.request<ExternalAplication>('post',`${this.basePath}/dashboards`,
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
