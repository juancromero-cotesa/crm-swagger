/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  ## 0.2.2 *** - Incluye enpoints de grupos ## 0.2.3 *** - Incluye método para la obtención de literales ## 0.2.4 *** - Añade métodos de búsqueda de personas - Añade esquemas de filtros para su uso con personas pero que serán de uso global en cualquier fitrado paginado - Añade permisos a apikeys - Añade métodos de interacciones ## 0.2.5 *** - Renombra Permissions como CrmPermissions por entrar en conflicto con interfaz Permissions de Typescript - Renombra FeaturePermissions como CrmFeaturePermissions  - Elimina estructura AllOf cuando se usa para añadir descripción  - Establece elementos obligatorios en el esquema de ApiKey - Añade endpoint para la obtención de parámetros de la aplicación - Añade interactionsStatistic en el esquema de persona para almacenar estadisticas de interacciones - Añade esquema interactionStatistic como elementos del array de interactionsStatistic - Se elimina UserRequest y se envía un usuario en post - Modifica request de búsqueda de personas - Añade métodos de parametrización - Establece los métodos de contacto como parámetros  - Establece los tipos de documentos como parámetros  - Establece los tipos de personas como parámetros - Establece los tipos de direcciones como parámetros  - Establece los géneros de personas como parámetros  ## 0.2.6 *** - Añade método de obtención de persona por email - Añade ejemplo de esquema de filtro   - Añade requeridos en persona personType y name  - Renombra esquema Roles a Role - Elimina de unidad organizativa el padre y lo referencia mediante su ID ## 0.2.7 *** - Añade flag de borrado lógico a personas - añade fecha de borrado lógico a personas - Modifica la respuesta de retorno de la eliminación lógica de persona - Redefine el modelo OrganizationalUnit - Incorpora el método ya desarrollado /organization/parents - Define nueva estructura de resultados de búsquedas paginadas - Define el método search de búsqueda de interacciones paginadas - Define la respuesta del filtro de auditoría como SearchResponse - Define el modelo de auditoría - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Nuevos métodos de búsqueda para person, interaction, crmrequest y audit - Modifica la estructura de filter añade metadatas y operator - añadidos métodos de solicitudes ya desarrollados (10%) - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Añade comentarios a las solicitudes (en la api actual está como notes)     - Añade customForm, customFormData, active, createDate y lastModifiedDate a CrmRequest - CrmRequestType - Se modifica summary por name. Falta el campo identificator en la API se añade OrganizationalUnit - Añade método de obtencion de avatar en personas     - Añade método de obtencion de logo en estructura organizativa     ## 0.2.8 *** - Incorpora todos los métodos importando Swagger 2.0 al 16/04/2021 - Se deprecan los métodos de filtro de auditoria, personas, interacciones y solicitudes - Se deprecan los métodos de obtener y crear notas, se sustituyen por comments - Se depreca la entidad Note -  CUSTOMFORMS *** - Se deprecan los métodos de obtener customform por name y por type - Se especifica el retorno correcto en el delete - Se añade la propiedad _id y se depreca la propiedad type -  DATASOURCES *** - Se añaden definiones de métodos ya implementados. Necesario repasar - Se añade el atributo descripción al datasource - Se renombra el atributo query como ruleSet - Se añade el atributo mongoQuery como string - Se añade el atributo projection coo array de strings - Se añade el atributo OrganizationalUnitAllowed - Se añade el atributo userOwner  Uso de interfaz CollectionName - El método /datasource/collectionsnames retorna un array de CollectionName (Ahora retorna un hashmap, valorar si es un cambio sencillo. Si no lo es es posible hacerlo en front) - Se cambia el tipo del atributo collection a CollectionName  -  ExternalAplication *** - Se establece el _id como ObjectID - CrmRequest *** - Se añade la propiedad details - Se añade la propiedad subjectId del tipo Person que será pa persona propietaria de la solicitud. Será el ObjectID de la persona - Comment *** - Se añade la propiedad user del tipo UserBasic - Interacciones *** - Se depreca get interactions - Widgets *** - se definene las clases Widget, WidgetChart e WidgetIndicator - Métodos crud de widgets - OrganizationUnit *** - Se renombra la OrganizationUnit a OrganizationalUnit - Se renombra la propiedad organizationUnitType a organizationalUnitType - OrganizationUnitType *** Se renombra la clase a OrganizationalUnitType 
 *
 * OpenAPI spec version: 0.2.8-PRIVATE
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
import { UsersGroup } from '../model/usersGroup';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GruposService {

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
     * Obtiene lista de grupos
     * Obtiene todos los grupos
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public groupsGet(observe?: 'body', reportProgress?: boolean): Observable<Array<UsersGroup>>;
    public groupsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UsersGroup>>>;
    public groupsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UsersGroup>>>;
    public groupsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<UsersGroup>>('get',`${this.basePath}/groups`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Elimina un grupo de usuarios
     * Elimina un grupo de usuarios.
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public groupsIdDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public groupsIdDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public groupsIdDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public groupsIdDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling groupsIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/groups/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene un grupo de usuarios
     * Obtiene un grupo de usuarios
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public groupsIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<UsersGroup>;
    public groupsIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersGroup>>;
    public groupsIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersGroup>>;
    public groupsIdGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling groupsIdGet.');
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

        return this.httpClient.request<UsersGroup>('get',`${this.basePath}/groups/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Crear un nuevo grupo de usuarios
     * Gera una nuevo grupo de usuarios
     * @param body 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public groupsIdPost(body: UsersGroup, id: string, observe?: 'body', reportProgress?: boolean): Observable<UsersGroup>;
    public groupsIdPost(body: UsersGroup, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersGroup>>;
    public groupsIdPost(body: UsersGroup, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersGroup>>;
    public groupsIdPost(body: UsersGroup, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling groupsIdPost.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling groupsIdPost.');
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

        return this.httpClient.request<UsersGroup>('post',`${this.basePath}/groups/${encodeURIComponent(String(id))}`,
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
     * Actualiza un grupo
     * Actualiza un grupo de usuarios
     * @param body 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public groupsIdPut(body: UsersGroup, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public groupsIdPut(body: UsersGroup, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public groupsIdPut(body: UsersGroup, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public groupsIdPut(body: UsersGroup, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling groupsIdPut.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling groupsIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/groups/${encodeURIComponent(String(id))}`,
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
