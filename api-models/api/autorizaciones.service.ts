/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores a la 5, se pueden consultar en las versiones previas    ### 0.5.0 ***  ### Contacto Campaña Se define el esquema CampaignContact Se añaden los métodos para la obtención, creación y borrado masivo de contactos en una campaña Se añaden los métodos para la obtención, edición y borrado de contactos , de manera individual, en una campaña  ### CitizenCard Se añade la propiedad citizenId en tarjeta ciudadana   ### 0.5.1 *** Se declara el esquema Survey que almacenará valoraciones del ciudadano  ### Solicitudes Se depreca   /crmrequests/{crmRequestId}/bpsprocess Añade el método POST   /crmrequests/{crmRequestId}/survey para almacenar la respuesta a la valoración de la solicitud Se añade la propiedad survey a la solicitud para almacenar la valoración del ciudadano a la atención recibida Se modifica el método en el método /crmrequests/{crmRequestId}/situation la clase del objeto a enviar en el post de CrmRequest a Situation  ### Person Se añade la propiedad surveys para almacenar las valoraciones del ciudadano al servicio prestado por el ayuntamiento Añade el método POST   /persons/survey para almacenar una nueva respuesta de encuesta de valoración del servicio  ### 0.5.2 ***  ### Personas   se modifica el método /persons/survey/ a   /persons/survey/{personId} pasando el id de la persona a la que establecer la encuesta    ## 0.5.3 ***  ### Auth Se define el método auth/thirdpartylogin para proporcionar login SSO a terceros (ya implementado)  ### Comment Se agregan los campos tipo, codigo y descripcion de la situacion a los comentarios de una solicitud y una interaccion  ## 0.5.4 ***  ### Tipos de interacciones  Define la propiedad identificator en el esquema de tipo de interacción Define el método  /interactions/types/{identificator} para obtener un tipo de interacción por su identificador  ## 0.5.5 ***  ### Personas Se añade el atributo que contiene la lista negra de tipos de interacciones a no registrar en la persona  ### CensusType Se añade el atributo email que guarda el email del usuario en el censo 
 *
 * OpenAPI spec version: 0.5.5-PRIVATE
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
