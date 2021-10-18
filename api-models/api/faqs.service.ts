/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.2 ***  ### Address - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  ### Dashboards - Se definen los métodos crud de dashboards - se define el esquema de dashboard   ### UsersDashboards - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  ### Datasources - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  ### Widgets - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       ### WidgetChart - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  ### DataSerie - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  ### Persons - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   ### Users - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  ### InteractionTypes , CrmRequestTypes - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  ### users Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ### ServiceResponseError Se redefine el esquema del error en las respuestas para alinearlo con back  ### Personas Documenta núevos métodos lock y unlock ya implementados  ### CensusViaType Se define el modelo  ### CensusEntity Se define el modelo  ### Addresses Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  ### Census Data europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   ### Addresses   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  ### Persons   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  ### Users Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  ### Person Se añade la propiedad electronicOffice a la persona  ### AdministrativeFile Define el esquema de expediente administrativo de experta importado desde ETL  ### ElectronicOffice Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona  ## 0.3.7 ***  ### CensusData Se añade la propiedad domicileCode  ##0.3.8 ***  ### Datasources  Incorpora método run Modifica modelo Datasource, Propiedad rules de tipo RuleSet, Propiedad group de tipo GroupOperator. Propiedad projectionField de tipo CustomField. Propiedad orderBy de tipo CustomFieldSort. Se modifica el modelo RuleSet Se añaden los métodos run y run/{datasourceId} Se definene los modelos GroupOperator, CustomField,GroupField,CustomFieldSort  ### USERBUS API Creación del api para las consultas de usuarios del bus. Métodos públicos que requieren de una apikey especifica para el bus Método POST /userbus guarda el usuario que llega por el body deshabilitado. Método GET /usersbus/{username}/{password} Busca usuario por username y password. Método GET /usersbus/doc/{docId} Busca usuario por numero de documento. Método GET /usersbus/tc/{idSgtc} Busca usuario por numero de tarjeta ciudadana asociada a la persona asociada al usuario. Método GET /usersbus/validusername/{username} Valida que una username sea valida.  ## 0.3.9 ***  ### DataSources se renombra la propiedad rules a ruleSet se renombra la propiedad projectionField a projectionFields   ### DataSourceQuery Se elimina el esquema DataSourceQuery  ### CrmRequestType se renombra la propiedad bpsProcessDefinitionsId a businessProcessesDefinitionsIds  ### Procesos de negocio Se elimina esquema BpsInstance   Se definen los métodos    - GET/businessprocess   - GET/businessprocess/{businessprocessId}   - GET/businessprocess/{businessprocessId}/indicators   - GET/businessprocess/{businessprocessId}/instances   - GET/businessprocess/{businessprocessId}/instances/{instanceId}   - GET/businessprocess/{businessprocessId}/taskdefinitions  Se definen los esquemas   - BusinessProcessDefinition   - BusinessProcessEntity   - BusinessProcessIndicator   - BusinessProcessIndicatorAlarm   - BusinessProcessInstance   - BusinessProcessTaskDefinition   - BusinessProcessTaskInstance   - BusinessProcessFormProperty    ## 0.4.0 ***  ### CrmRequest bpsProcessInstances se renombra como businessProcessesInstancesIds y pasa a ser un array de strings  ## 0.4.1 ***  ### Procesos de negocio   Metodo para la obtención de actividades de una instancia     GET /search/historic-activities-instances   Se define el esquema BusinessProcessTaskActivity    Se modifica el método   eliminando el párametro bussinesProcessId   /businessprocess/{businessprocessId}/instances/{instanceId}  ## 0.4.2 ***  ### FAQs se definen los esquemas Faqs, FaqAnswer y FaqFile Se definen los métodos sobre faqs    - GET /faqs   - POST /faqs   - GET /faqs/{faqId}   - PUT /faqs/{faqId}   - DELETE /faqs/{faqId}   - POST /faqs/{faqId}/answers   - PUT /faqs/{faqId}/answers/{answerId}   - DELETE /faqs/{faqId}/answers/{answerId}   - GET /faqs/files   - POST /faqs/fileUpload     ## 0.4.3 ***  Se añade el método POST /faqs/{faqId}/name Se define el esquema FaqNameUpdateRequest  ### 0.4.4 ***  InteractionInteractive Se añade el atributo active      ### 0.4.5 ***  ### FAQs Se renombran los métodos /faqs/file a /faqs/files para igualarlo con lo implementado en back se añade el método get  /faqs/files/{fileId} para la descarga de ficheros Se define corrctamente el método de subida de archivos post /faqs/files Se modifica FaqFile se añaden las propiedades fileName y fileType  ### 0.4.6 ***  ###Campañas Se definen los esquemas Campaign y CampaignList   ###Users Se añade la propiedad citizen al esquema UserBasic que indica si es un usuario ciudadano 
 *
 * OpenAPI spec version: 0.4.6-PRIVATE
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

import { Faq } from '../model/faq';
import { FaqAnswer } from '../model/faqAnswer';
import { FaqFile } from '../model/faqFile';
import { FaqNameUpdateRequest } from '../model/faqNameUpdateRequest';
import { ServiceResponseError } from '../model/serviceResponseError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FaqsService {

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
     * elimina la respuesta de la faq
     * 
     * @param faqId Id de faq a actualizar
     * @param answerId Id de respuesta de la faq a actualizar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFaqIdAnswersAnswerIdDelete(faqId: string, answerId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public faqsFaqIdAnswersAnswerIdDelete(faqId: string, answerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public faqsFaqIdAnswersAnswerIdDelete(faqId: string, answerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public faqsFaqIdAnswersAnswerIdDelete(faqId: string, answerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (faqId === null || faqId === undefined) {
            throw new Error('Required parameter faqId was null or undefined when calling faqsFaqIdAnswersAnswerIdDelete.');
        }

        if (answerId === null || answerId === undefined) {
            throw new Error('Required parameter answerId was null or undefined when calling faqsFaqIdAnswersAnswerIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/faqs/${encodeURIComponent(String(faqId))}/answers/${encodeURIComponent(String(answerId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Actualiza una faq
     * 
     * @param body actualiza el título y descripción de una faq
     * @param faqId Id de faq a actualizar
     * @param answerId Id de respuesta de la faq a actualizar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFaqIdAnswersAnswerIdPut(body: FaqAnswer, faqId: string, answerId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public faqsFaqIdAnswersAnswerIdPut(body: FaqAnswer, faqId: string, answerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public faqsFaqIdAnswersAnswerIdPut(body: FaqAnswer, faqId: string, answerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public faqsFaqIdAnswersAnswerIdPut(body: FaqAnswer, faqId: string, answerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling faqsFaqIdAnswersAnswerIdPut.');
        }

        if (faqId === null || faqId === undefined) {
            throw new Error('Required parameter faqId was null or undefined when calling faqsFaqIdAnswersAnswerIdPut.');
        }

        if (answerId === null || answerId === undefined) {
            throw new Error('Required parameter answerId was null or undefined when calling faqsFaqIdAnswersAnswerIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/faqs/${encodeURIComponent(String(faqId))}/answers/${encodeURIComponent(String(answerId))}`,
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
     * Nueva respuesta a FAQ
     * 
     * @param body añade una respuesta a la faq
     * @param faqId Id de faq a actualizar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFaqIdAnswersPost(body: FaqAnswer, faqId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public faqsFaqIdAnswersPost(body: FaqAnswer, faqId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public faqsFaqIdAnswersPost(body: FaqAnswer, faqId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public faqsFaqIdAnswersPost(body: FaqAnswer, faqId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling faqsFaqIdAnswersPost.');
        }

        if (faqId === null || faqId === undefined) {
            throw new Error('Required parameter faqId was null or undefined when calling faqsFaqIdAnswersPost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/faqs/${encodeURIComponent(String(faqId))}/answers`,
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
     * Actualiza una faq
     * 
     * @param faqId Id de faq a actualizar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFaqIdDelete(faqId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public faqsFaqIdDelete(faqId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public faqsFaqIdDelete(faqId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public faqsFaqIdDelete(faqId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (faqId === null || faqId === undefined) {
            throw new Error('Required parameter faqId was null or undefined when calling faqsFaqIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/faqs/${encodeURIComponent(String(faqId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * obtiene una faq
     * 
     * @param faqId Id de faq a actualizar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFaqIdGet(faqId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Faq>>;
    public faqsFaqIdGet(faqId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Faq>>>;
    public faqsFaqIdGet(faqId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Faq>>>;
    public faqsFaqIdGet(faqId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (faqId === null || faqId === undefined) {
            throw new Error('Required parameter faqId was null or undefined when calling faqsFaqIdGet.');
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
            'application/json:'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Faq>>('get',`${this.basePath}/faqs/${encodeURIComponent(String(faqId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Actualiza el nombre y descricpción de una faq
     * 
     * @param body actualiza nombre y desc de una faq
     * @param faqId Id de faq a actualizar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFaqIdNamePut(body: FaqNameUpdateRequest, faqId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public faqsFaqIdNamePut(body: FaqNameUpdateRequest, faqId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public faqsFaqIdNamePut(body: FaqNameUpdateRequest, faqId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public faqsFaqIdNamePut(body: FaqNameUpdateRequest, faqId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling faqsFaqIdNamePut.');
        }

        if (faqId === null || faqId === undefined) {
            throw new Error('Required parameter faqId was null or undefined when calling faqsFaqIdNamePut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/faqs/${encodeURIComponent(String(faqId))}/name`,
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
     * Actualiza una faq
     * 
     * @param body actualiza una faq
     * @param faqId Id de faq a actualizar
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFaqIdPut(body: Faq, faqId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public faqsFaqIdPut(body: Faq, faqId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public faqsFaqIdPut(body: Faq, faqId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public faqsFaqIdPut(body: Faq, faqId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling faqsFaqIdPut.');
        }

        if (faqId === null || faqId === undefined) {
            throw new Error('Required parameter faqId was null or undefined when calling faqsFaqIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/faqs/${encodeURIComponent(String(faqId))}`,
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
     * Elimina un faqFile y su archivo asociado
     * @param faqFileId identificador del archivo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFilesFaqFileIdDelete(faqFileId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public faqsFilesFaqFileIdDelete(faqFileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public faqsFilesFaqFileIdDelete(faqFileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public faqsFilesFaqFileIdDelete(faqFileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (faqFileId === null || faqFileId === undefined) {
            throw new Error('Required parameter faqFileId was null or undefined when calling faqsFilesFaqFileIdDelete.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<any>('delete',`${this.basePath}/faqs/files/${encodeURIComponent(String(faqFileId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Descarga el archivo asociado a un  faqFile
     * @param faqFileId identificador del archivo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFilesFaqFileIdGet(faqFileId: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public faqsFilesFaqFileIdGet(faqFileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public faqsFilesFaqFileIdGet(faqFileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public faqsFilesFaqFileIdGet(faqFileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (faqFileId === null || faqFileId === undefined) {
            throw new Error('Required parameter faqFileId was null or undefined when calling faqsFilesFaqFileIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Blob>('get',`${this.basePath}/faqs/files/${encodeURIComponent(String(faqFileId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Obtiene todos los archivos de faqFile del sistema
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFilesGet(observe?: 'body', reportProgress?: boolean): Observable<Array<FaqFile>>;
    public faqsFilesGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<FaqFile>>>;
    public faqsFilesGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<FaqFile>>>;
    public faqsFilesGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json:',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<FaqFile>>('get',`${this.basePath}/faqs/files`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Carga un archivo con su nombre y descripción creando el faqFile asociado
     * @param description 
     * @param name 
     * @param fileName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsFilesPostForm(description?: string, name?: string, fileName?: Blob, observe?: 'body', reportProgress?: boolean): Observable<FaqFile>;
    public faqsFilesPostForm(description?: string, name?: string, fileName?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FaqFile>>;
    public faqsFilesPostForm(description?: string, name?: string, fileName?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FaqFile>>;
    public faqsFilesPostForm(description?: string, name?: string, fileName?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json:',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (description !== undefined) {
            formParams = formParams.append('description', <any>description) as any || formParams;
        }
        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) as any || formParams;
        }
        if (fileName !== undefined) {
            formParams = formParams.append('fileName', <any>fileName) as any || formParams;
        }

        return this.httpClient.request<FaqFile>('post',`${this.basePath}/faqs/files`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene lista de faqs
     * Obtiene lista de faqs
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Faq>>;
    public faqsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Faq>>>;
    public faqsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Faq>>>;
    public faqsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<Faq>>('get',`${this.basePath}/faqs`,
            {
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
     * @param body Crea una Faq
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public faqsPost(body: Faq, observe?: 'body', reportProgress?: boolean): Observable<Faq>;
    public faqsPost(body: Faq, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Faq>>;
    public faqsPost(body: Faq, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Faq>>;
    public faqsPost(body: Faq, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling faqsPost.');
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

        return this.httpClient.request<Faq>('post',`${this.basePath}/faqs`,
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
