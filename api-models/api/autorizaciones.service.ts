/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.2 ***  ### Address - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  ### Dashboards - Se definen los métodos crud de dashboards - se define el esquema de dashboard   ### UsersDashboards - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  ### Datasources - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  ### Widgets - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       ### WidgetChart - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  ### DataSerie - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  ### Persons - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   ### Users - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  ### InteractionTypes , CrmRequestTypes - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  ### users Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ### ServiceResponseError Se redefine el esquema del error en las respuestas para alinearlo con back  ### Personas Documenta núevos métodos lock y unlock ya implementados  ### CensusViaType Se define el modelo  ### CensusEntity Se define el modelo  ### Addresses Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  ### Census Data europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   ### Addresses   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  ### Persons   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  ### Users Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  ### Person Se añade la propiedad electronicOffice a la persona  ### AdministrativeFile Define el esquema de expediente administrativo de experta importado desde ETL  ### ElectronicOffice Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona  ## 0.3.7 ***  ### CensusData Se añade la propiedad domicileCode  ##0.3.8 ***  ### Datasources  Incorpora método run Modifica modelo Datasource, Propiedad rules de tipo RuleSet, Propiedad group de tipo GroupOperator. Propiedad projectionField de tipo CustomField. Propiedad orderBy de tipo CustomFieldSort. Se modifica el modelo RuleSet Se añaden los métodos run y run/{datasourceId} Se definene los modelos GroupOperator, CustomField,GroupField,CustomFieldSort  ### USERBUS API Creación del api para las consultas de usuarios del bus. Métodos públicos que requieren de una apikey especifica para el bus Método POST /userbus guarda el usuario que llega por el body deshabilitado. Método GET /usersbus/{username}/{password} Busca usuario por username y password. Método GET /usersbus/doc/{docId} Busca usuario por numero de documento. Método GET /usersbus/tc/{idSgtc} Busca usuario por numero de tarjeta ciudadana asociada a la persona asociada al usuario. Método GET /usersbus/validusername/{username} Valida que una username sea valida.  ## 0.3.9 ***  ### DataSources se renombra la propiedad rules a ruleSet se renombra la propiedad projectionField a projectionFields   ### DataSourceQuery Se elimina el esquema DataSourceQuery  ### CrmRequestType se renombra la propiedad bpsProcessDefinitionsId a businessProcessesDefinitionsIds  ### Procesos de negocio Se elimina esquema BpsInstance  Se definen los métodos:    - GET/businessprocess/{businessprocessId}   - GET/businessprocess/{businessprocessId}/indicators   - GET/businessprocess/{businessprocessId}/instances   - GET/businessprocess/{businessprocessId}/instances/{instanceId}   - GET/businessprocess/{businessprocessId}/taskdefinitions  Se definen los esquemas:    - BusinessProcessDefinition   - BusinessProcessEntity   - BusinessProcessIndicator   - BusinessProcessIndicatorAlarm   - BusinessProcessInstance   - BusinessProcessTaskDefinition   - BusinessProcessTaskInstance   - BusinessProcessFormProperty 
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
