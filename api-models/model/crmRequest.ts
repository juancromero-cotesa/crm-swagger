/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores, se pueden consultar en las versiones previas   ## 0.3.2 ***  ### Address - Se añaden los campos number, floor, door, ladder, km, municipality y forcedAddress. - Se elimina el campo addressLine2  ### Dashboards - Se definen los métodos crud de dashboards - se define el esquema de dashboard   ### UsersDashboards - Se definen los métodos crud de la configuracion de dashboards  - Se define el esquema de usersDashboards y DashboardConfiguration  ### Datasources - Se especifica el retorno correcto del método /datasource/collectionsfields/{collection} es un objeto en vez de un array  ### Widgets - Se renombra la propiedad organizationalUnit a organizationalUnits y se convierte en array - Se elimina la propiedad privateWidget ya que no es necesaria al tener un array de organizationalUnits.       ### WidgetChart - Se elimina la propiedad xAxisLabels pues se gestionan las etiquetas desde la serie  ### DataSerie - Se define la propiedad dataSourceFieldForLabel que indica la propiedad que contiene las etiquetas de la serie  ### Persons - Nuevo método/persons/forcedvias que retorna las vías forzadas en direcciones de personas - Nuevo esquema ForcedVia - Nuevas propiedades segmentationWhiteList y segmentationBlackList   ### Users - Se define al usuario el dashboard por defecto en la propiedad defaultDashboard. Deberá actualizarse cada vez que se actualice ese dashboard  ### InteractionTypes , CrmRequestTypes - Se define la propiedad segmentation que contiene los segmentos que genera la interacción o solicitud  ## 0.3.3 ***  ### users Se especifica el retorno del error 460 cuando no se puede procesar la petición por condiciones de la lógica de la aplicación. P. Ej. el usuario se asocia a una persona que ya tiene usuario asociado  ### ServiceResponseError Se redefine el esquema del error en las respuestas para alinearlo con back  ### Personas Documenta núevos métodos lock y unlock ya implementados  ### CensusViaType Se define el modelo  ### CensusEntity Se define el modelo  ### Addresses Se modifica el modelo    addressType -se renombra a viaType del tipo pasa a CensusViaType   addressLine1 -se renombra a via y se define como CensusEntity   city, province(state) y municipality pasan a ser de tipo CensusEntity   state - se renombra a province  ### Census Data europeanCommunity y pasan de boolean a numérico para alinearlos con lo recibido de padrón  ## 0.3.4 ***   ### Addresses   -  Se modifica el modelo. Se añaden las propiedades letter, block, portal de tipo string para alinear las direcciones con padrón  ### Persons   - /persons/forcedvias/ - Se modifica la respuesta y la forma de obtener las vías forzadas. Se obtienen por id de municipio y se retorna la vía con su código y el tipo de vía con su código   - Se elimina el esquema ForcedVia, ahora se retorna CensusViaViaType    ##0.3.5  ***  ### Users Se define el nuevo método put /users/{userId}/defaultdashboard mediante el cual se establece la propieda defaultDashboard con el dashboard recibido en el body  ##0.3.6 ***  ### Person Se añade la propiedad electronicOffice a la persona  ### AdministrativeFile Define el esquema de expediente administrativo de experta importado desde ETL  ### ElectronicOffice Se define el esquema de oficina electrónica que contiene los datos de sede electrónica de la persona  ## 0.3.7 ***  ### CensusData Se añade la propiedad domicileCode  ##0.3.8 ***  ### Datasources  Incorpora método run Modifica modelo Datasource, Propiedad rules de tipo RuleSet, Propiedad group de tipo GroupOperator. Propiedad projectionField de tipo CustomField. Propiedad orderBy de tipo CustomFieldSort. Se modifica el modelo RuleSet Se añaden los métodos run y run/{datasourceId} Se definene los modelos GroupOperator, CustomField,GroupField,CustomFieldSort  ### USERBUS API Creación del api para las consultas de usuarios del bus. Métodos públicos que requieren de una apikey especifica para el bus Método POST /userbus guarda el usuario que llega por el body deshabilitado. Método GET /usersbus/{username}/{password} Busca usuario por username y password. Método GET /usersbus/doc/{docId} Busca usuario por numero de documento. Método GET /usersbus/tc/{idSgtc} Busca usuario por numero de tarjeta ciudadana asociada a la persona asociada al usuario. Método GET /usersbus/validusername/{username} Valida que una username sea valida.  ## 0.3.9 ***  ### DataSources se renombra la propiedad rules a ruleSet   ### DataSourceQuery Se elimina el esquema DataSourceQuery  ### CrmRequestType se renombra la propiedad bpsProcessDefinitionsId a businessProcessesDefinitionsIds  ### Procesos de negocio Se elimina esquema BpsInstance  Se definen los métodos:    - GET/businessprocess/{businessprocessId}   - GET/businessprocess/{businessprocessId}/indicators   - GET/businessprocess/{businessprocessId}/instances   - GET/businessprocess/{businessprocessId}/instances/{instanceId}   - GET/businessprocess/{businessprocessId}/taskdefinitions  Se definen los esquemas:    - BusinessProcessDefinition   - BusinessProcessEntity   - BusinessProcessIndicator   - BusinessProcessIndicatorAlarm   - BusinessProcessInstance   - BusinessProcessTaskDefinition   - BusinessProcessTaskInstance   - BusinessProcessFormProperty 
 *
 * OpenAPI spec version: 0.3.9-PRIVATE
 * Contact: juancromero@grupotecopy.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BusinessProcessInstance } from './businessProcessInstance';
import { Comment } from './comment';
import { CrmRequestType } from './crmRequestType';
import { CustomForm } from './customForm';
import { Interaction } from './interaction';
import { Situation } from './situation';
import { UserBasic } from './userBasic';

/**
 * Solicitud realizada en CRM de una persona o componente que precisa de una gestión y/o la intervención de otros sistemas por lo que dispone de un ciclo de vida y pasa por diferentes estados desde su inicio hasta su cierre. Podrá disponer de un proceso de negocio asociado o un usuario asignado para la realiazción de la solicitud de forma manual 
 */
export interface CrmRequest { 
    _id: string;
    createDate: string;
    lastModifiedDate: string;
    /**
     * Usuario creador de la solicitud, es el usuario inicial de la solicitud, no se puede modificar.
     */
    userAgent: UserBasic;
    /**
     * Usuario propietario actual de la solicitud, es el usuario encargado de gestionarla, se podrán realizar reasignaciones de uno a otro
     */
    userOwner: UserBasic;
    /**
     * Identificador único del sujeto en la iniciativa. Podrá ser organización, ciudadano, visitante, empresa, etc. No es un atributo requerido porque se podrán registrar interacciones anónimas
     */
    subjectId?: string;
    requestType: CrmRequestType;
    interactionOrigin: Interaction;
    /**
     * Identificadores de interacciones relacionadas con la solicitud
     */
    interactionRelationsIds: Array<string>;
    bpsProcessInstances: Array<BusinessProcessInstance>;
    /**
     * descripción de la solicitud
     */
    details: string;
    customForm: CustomForm;
    /**
     * Datos del formulario personalizado para la tipo de solicitud
     */
    customFormData: any;
    variables: Array<string>;
    /**
     * Situaciones de la solicitud
     */
    situations: Array<Situation>;
    /**
     * Comentarios a la solicitud
     */
    comments: Array<Comment>;
    active: boolean;
}