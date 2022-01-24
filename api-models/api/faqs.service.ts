/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores a la 0.4.5, se pueden consultar en las versiones previas   ### 0.4.5 ***  ### FAQs Se renombran los métodos /faqs/file a /faqs/files para igualarlo con lo implementado en back se añade el método get  /faqs/files/{fileId} para la descarga de ficheros Se define corrctamente el método de subida de archivos post /faqs/files Se modifica FaqFile se añaden las propiedades fileName y fileType  ### 0.4.6 ***  ###Campañas Se definen el esquema Campaign Se definen los mátodos de camapañas   ###Users Se añade la propiedad citizen al esquema UserBasic que indica si es un usuario ciudadano  ### 0.4.7 *** modifica _id y fieldMaps en el esquema Campaign  ### 0.4.8 *** Se añade text en campaign para usar como texto a enviar en campañas que no usan plantillas como las notificaciones push Se añade subject  Se elimina campaignListId y se añade campaignListName Se añade la propiedad status (enumerado)       ### 0.4.9 *** Se añade metodo POST /persons/personContact  ### 0.5.0 ***  ###Contacto Campaña Se define el esquema CampaignContact Se añaden los métodos para la obtención, creación y borrado masivo de contactos en una campaña Se añaden los métodos para la obtención, edición y borrado de contactos , de manera individual, en una campaña  ###CitizenCard Se añade la propiedad citizenId en tarjeta ciudadana   ### 0.5.0 *** Se declara el esquema Survey que almacenará valoraciones del ciudadano  ###Solicitudes Se depreca   /crmrequests/{crmRequestId}/bpsprocess Añade el método POST   /crmrequests/{crmRequestId}/survey para almacenar la respuesta a la valoración de la solicitud Se añade la propiedad survey a la solicitud para almacenar la valoración del ciudadano a la atención recibida Se modifica el método en el método /crmrequests/{crmRequestId}/situation la clase del objeto a enviar en el post de CrmRequest a Situation  ###Person Se añade la propiedad surveys para almacenar las valoraciones del ciudadano al servicio prestado por el ayuntamiento Añade el método POST   /persons/survey para almacenar una nueva respuesta de encuesta de valoración del servicio 
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
