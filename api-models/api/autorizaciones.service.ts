/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  ## 0.2.2 *** - Incluye enpoints de grupos ## 0.2.3 *** - Incluye método para la obtención de literales ## 0.2.4 *** - Añade métodos de búsqueda de personas - Añade esquemas de filtros para su uso con personas pero que serán de uso global en cualquier fitrado paginado - Añade permisos a apikeys - Añade métodos de interacciones ## 0.2.5 *** - Renombra Permissions como CrmPermissions por entrar en conflicto con interfaz Permissions de Typescript - Renombra FeaturePermissions como CrmFeaturePermissions  - Elimina estructura AllOf cuando se usa para añadir descripción  - Establece elementos obligatorios en el esquema de ApiKey - Añade endpoint para la obtención de parámetros de la aplicación - Añade interactionsStatistic en el esquema de persona para almacenar estadisticas de interacciones - Añade esquema interactionStatistic como elementos del array de interactionsStatistic - Se elimina UserRequest y se envía un usuario en post - Modifica request de búsqueda de personas - Añade métodos de parametrización - Establece los métodos de contacto como parámetros  - Establece los tipos de documentos como parámetros  - Establece los tipos de personas como parámetros - Establece los tipos de direcciones como parámetros  - Establece los géneros de personas como parámetros  ## 0.2.6 *** - Añade método de obtención de persona por email - Añade ejemplo de esquema de filtro   - Añade requeridos en persona personType y name  - Renombra esquema Roles a Role - Elimina de unidad organizativa el padre y lo referencia mediante su ID ## 0.2.7 *** - Añade flag de borrado lógico a personas - añade fecha de borrado lógico a personas - Modifica la respuesta de retorno de la eliminación lógica de persona - Redefine el modelo OrganizationalUnit - Incorpora el método ya desarrollado /organization/parents - Define nueva estructura de resultados de búsquedas paginadas - Define el método search de búsqueda de interacciones paginadas - Define la respuesta del filtro de auditoría como SearchResponse - Define el modelo de auditoría - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Nuevos métodos de búsqueda para person, interaction, crmrequest y audit - Modifica la estructura de filter añade metadatas y operator - añadidos métodos de solicitudes ya desarrollados (10%) - Añade OrganizationalUnit a Role - Se añaden las propiedades _id y batch a InteractionType - Añade comentarios a las solicitudes (en la api actual está como notes)     - Añade CustomForm, customFormData, active, createDate y lastModifiedDate a CrmRequest - CrmRequestType - Se modifica summary por name. Falta el campo identificator en la API se añade OrganizationalUnit - Añade método de obtencion de avatar en personas     - Añade método de obtencion de logo en estructura organizativa     ## 0.2.8 *** - Incorpora todos los métodos importando Swagger 2.0 al 16/04/2021 - Se deprecan los métodos de filtro de auditoria, personas, interacciones y solicitudes - Se deprecan los métodos de obtener y crear notas, se sustituyen por comments - Se depreca la entidad Note -  CUSTOMFORMS *** - Se deprecan los métodos de obtener customform por name y por type - Se especifica el retorno correcto en el delete - Se añade la propiedad _id y se depreca la propiedad type -  DATASOURCES *** - Se añaden definiones de métodos ya implementados. Necesario repasar - Se añade el atributo descripción al datasource - Se renombra el atributo query como ruleSet - Se añade el atributo mongoQuery como string - Se añade el atributo projection coo array de strings - Se añade el atributo OrganizationalUnitAllowed - Se añade el atributo userOwner  Uso de interfaz CollectionName - El método /datasource/collectionsnames retorna un array de CollectionName (Ahora retorna un ha-shmap, valorar si es un cambio sencillo. Si no lo es es posible hacerlo en front) - Se cambia el tipo del atributo collection a CollectionName  -  ExternalAplication *** - Se establece el _id como ObjectID - CrmRequest *** - Se añade la propiedad details - Se añade la propiedad subjectId del tipo Person que será pa persona propietaria de la solicitud. Será el ObjectID de la persona - Comment *** - Se añade la propiedad user del tipo UserBasic - Interacciones *** - Se depreca get interactions - Widgets *** - se definene las clases Widget, WidgetChart e WidgetIndicator - Métodos crud de widgets - OrganizationUnit *** - Se renombra la OrganizationUnit a OrganizationalUnit - Se renombra la propiedad organizationUnitType a organizationalUnitType - OrganizationUnitType *** Se renombra la clase a OrganizationalUnitType   ### 0.2.9 ***  DATASOURCES *** - Se definen los modelos Rule y RuleSet - Se define el tipo de la propiedad ruleset como un objeto del tipo Rule o Ruleset  APIKEYS *** Se añade la propiedad roles como array de Roles que almacena los roles de una apiKey  ## 0.3.0 ***  Situation *** - Se redefine la clase con los atributos _id y situacionType situacionType será un objeto del tipo SituacionType que definirá la situación  SituationType *** Se define la clase SituationType y sus métodos  Interactions *** - Se elimina el método filter - En el método de añadir situación se envía y retorna la situación añadida , no la interacción completa (/interactions/{id}/situation)  CrmRequest *** - Se elimina el método filter - se deprecan los métodos get y post de notes - se depreca el método get de sitauciones de una solicitud '/crmrequests/situations/{crmRequestId} 
 *
 * OpenAPI spec version: 0.3.0-PRIVATE
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

import { ChangePasswordRequest } from '../model/changePasswordRequest';
import { Fid } from '../model/fid';
import { ForgotPasswordRequest } from '../model/forgotPasswordRequest';
import { Login } from '../model/login';
import { LoginFid } from '../model/loginFid';
import { LoginTrusted } from '../model/loginTrusted';
import { RecoverPasswordRequest } from '../model/recoverPasswordRequest';
import { ServiceResponseError } from '../model/serviceResponseError';
import { TokenResponse } from '../model/tokenResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AutorizacionesService {

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
     * Autoriza usuario autenticado por proveedor de confianza
     * &lt;p&gt;Autoriza en CRM un usuario que ya ha sido autenticado por alguno de los métodos en los que se confía como certificado, dni electrónico y LDAP&lt;/p&gt; &lt;ol&gt;  &lt;li&gt;El proceso autentica el usuario de forma segura a traves del bus de integración y el bus solicita la autorización del usuario mediante los datos identificados sin necesidad de contraseña.  &lt;/li&gt; &lt;li&gt;Si no existe se crea el usuario y la persona asociada. &lt;/li&gt; &lt;li&gt;   Se genera el token del usuario y se retorna &lt;/li&gt; &lt;/ol&gt;
     * @param body Objeto para el login en aplicación de terceros, permitirá hacer login mediante usuario, teléfono, email o tarjeta ciudadana los cuales son excluyentes y deberá identificar la aplicación a la que se desea acceder.  Si se proporciona mas de uno devolverá error 400 en la petición
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authAuthorizePost(body: LoginTrusted, observe?: 'body', reportProgress?: boolean): Observable<TokenResponse>;
    public authAuthorizePost(body: LoginTrusted, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenResponse>>;
    public authAuthorizePost(body: LoginTrusted, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public authAuthorizePost(body: LoginTrusted, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authAuthorizePost.');
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

        return this.httpClient.request<TokenResponse>('post',`${this.basePath}/auth/authorize`,
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
     * login federado
     * &lt;h1&gt;Login Federado&lt;/h1&gt;  &lt;p&gt;Autentica un usuario para el acceso a una aplicación de terceros mediante el uso de un identificador admitido (nombre, email, id tarjeta ciudadana,...) y su contraseña CRM. El proceso identifica el usuario en CRM y busca una autorización previa de acceso a la aplicación de terceros..&lt;/p&gt; &lt;ol&gt;  &lt;li&gt;El proceso identifica el usuario mediante sus credenciales CRM y busca una autorización previa de acceso a la aplicación.&lt;/li&gt; &lt;li&gt;Si existe autorización previa se redirige al acceso de la aplicación con el código de autorización almacenado lo que proporcionará acceso a esta son necesidad de realizar una nueva identificación.&lt;/li&gt; &lt;li&gt; Si no existe se redirige al componente C11 pasando como parámetros la aplicación a autorizar y el id del usuario. &lt;/li&gt; &lt;li&gt; El bus de integración redirige al login de la aplicación solicitada. Esta tras un login correcto realiza nueva llamada al bus adjuntando los parámetros del id de usuario, identificador de aplicación y código de autorización obtenido en el login. &lt;/li&gt; &lt;li&gt; El bus de integración realiza llamada a CRM al método de almacenamiento de identificación federada, donde CRM almacenará la información para posteriores solicitudes de acceso a la aplicación. &lt;/li&gt; &lt;/ol&gt;
     * @param body Objeto para el login en aplicación de terceros, permitirá hacer login mediante usuario, teléfono, email o tarjeta ciudadana los cuales son excluyentes y deberá identificar la aplicación a la que se desea acceder.  Si se proporciona mas de uno devolverá error 400 en la petición
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authFidLoginPost(body: LoginFid, observe?: 'body', reportProgress?: boolean): Observable<TokenResponse>;
    public authFidLoginPost(body: LoginFid, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenResponse>>;
    public authFidLoginPost(body: LoginFid, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public authFidLoginPost(body: LoginFid, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authFidLoginPost.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<TokenResponse>('post',`${this.basePath}/auth/fid/login`,
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
     * Revoca identificación federada almacenada
     * Revoca una identificación federada obtenida previamente estableciéndola como no habilitada.
     * @param body Objeto con la identificación federada a eliminar.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authFidRevoquePost(body: Fid, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public authFidRevoquePost(body: Fid, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public authFidRevoquePost(body: Fid, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public authFidRevoquePost(body: Fid, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authFidRevoquePost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/auth/fid/revoque`,
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
     * Almacena identificación federada
     * Almacena una identificación federada asociada a un usuario y una aplicación. Cuando en posteriores ocasiones el usuario intente acceder a la aplicación podrá usar el código de autorización reconocido por la app para el acceso.
     * @param body Objeto con la identificación federada a almacenar.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authFidStorePost(body: Fid, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public authFidStorePost(body: Fid, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public authFidStorePost(body: Fid, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public authFidStorePost(body: Fid, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authFidStorePost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/auth/fid/store`,
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
     * login de usuario
     * &lt;h2&gt;Login&lt;/h2&gt; &lt;p&gt; Autentica un usuario mediante el uso de un identificador admitido (nombre, email, id tarjeta ciudadana,...) y su contraseña. Como respuesta proporciona un objeto con un token de acceso, su periodo de vigencia y un token de refresco que permitirá obtener un nuevo token cuando este haya caducado.&lt;p&gt; Las aplicaciones cliente deberán &lt;strong&gt;almacenar los tokens de forma segura y eliminar tanto el token de acceso como el de refresco cuando el usuario realice el logout&lt;/strong&gt; &lt;/p&gt; &lt;p&gt; El token devuelto en formato JWT contendrá en el payload el id el usuario, el id de la persona, id de la tarjeta ciudadana si se dispone de ella y el id de la aplicación desde la que e hizo login obtenido desde el ApiKey&lt;/p&gt;
     * @param body Objeto para el login, permitirá hacer login mediante usuario, teléfono, email o tarjeta ciudadana los cuales son excluyentes.  Si se proporciona mas de uno devolverá error 400 en la petición
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authLoginPost(body: Login, observe?: 'body', reportProgress?: boolean): Observable<TokenResponse>;
    public authLoginPost(body: Login, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenResponse>>;
    public authLoginPost(body: Login, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public authLoginPost(body: Login, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authLoginPost.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<TokenResponse>('post',`${this.basePath}/auth/login`,
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
     * Realiza el logout de un usuario invalidando su token de acceso
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authLogoutPost(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public authLogoutPost(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public authLogoutPost(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public authLogoutPost(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<any>('post',`${this.basePath}/auth/logout`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Cambio de contraseña
     * Modifica la contraseña del usuario pasado por body. Si el usuario recibido no es el propietario del token, deberá tener los permisos necesarios.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authPasswordChangePost(body: ChangePasswordRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public authPasswordChangePost(body: ChangePasswordRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public authPasswordChangePost(body: ChangePasswordRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public authPasswordChangePost(body: ChangePasswordRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authPasswordChangePost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/auth/password/change`,
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
     * Contraseña olvidada
     * Envía notificación al usuario para la recuperación de la contraseña mediante el paso del email o el id de su tarjeta ciudadana. Si se pasa el email se envía el enlace de recuperación sin realizar mas comprobaciones. Si no se recibe email y se recibe el id de tarjeta, se obtendrá el email asociado al propietario. Si no se encuentra email asociado o no se localiza el usuario con la tarjeta se retorna error 400
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authPasswordLostPost(body: ForgotPasswordRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public authPasswordLostPost(body: ForgotPasswordRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public authPasswordLostPost(body: ForgotPasswordRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public authPasswordLostPost(body: ForgotPasswordRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authPasswordLostPost.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/auth/password/lost`,
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
     * Establece la nueva contraseña para el usuario asociado al token de recuperación
     * Tras una solicitud de restauración de contraseña, se ha enviado al usuario un enlace con un token de recuperación asociado. Mediante el uso de este token se podrá enviar una nueva contraseña que se establecerá como contraseña del usuario asociado al token de recuperación.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authPasswordRecoverPost(body: RecoverPasswordRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public authPasswordRecoverPost(body: RecoverPasswordRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public authPasswordRecoverPost(body: RecoverPasswordRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public authPasswordRecoverPost(body: RecoverPasswordRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authPasswordRecoverPost.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/auth/password/recover`,
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
     * Refresca el token de autorización
     * Obtiene un nuevo token de acceso a partir del token válido actual y el token de refresco
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authRefreshTokenPost(body?: TokenResponse, observe?: 'body', reportProgress?: boolean): Observable<TokenResponse>;
    public authRefreshTokenPost(body?: TokenResponse, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenResponse>>;
    public authRefreshTokenPost(body?: TokenResponse, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public authRefreshTokenPost(body?: TokenResponse, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<TokenResponse>('post',`${this.basePath}/auth/refreshToken`,
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
     * checksession
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checksessionUsingPOST(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: boolean; }>;
    public checksessionUsingPOST(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: boolean; }>>;
    public checksessionUsingPOST(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: boolean; }>>;
    public checksessionUsingPOST(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: boolean; }>('post',`${this.basePath}/check-session`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
