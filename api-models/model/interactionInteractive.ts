/**
 * Api CRM
 * Especificaciónes de la API pública de CRM.  # Versión 2 parte pública.  ***  Los métodos estaran protegidos mediante el paso de un token válido.  Los métodos que puedan ser accedidos por aplicaciones de terceros estarán protegidos por el paso de una api key que tendrá definidos los permisos correspondientes.  Se eliminan las descriciones de cambios de versiones anteriores a la 5, se pueden consultar en las versiones previas    ### 0.5.0 ***  ###Contacto Campaña Se define el esquema CampaignContact Se añaden los métodos para la obtención, creación y borrado masivo de contactos en una campaña Se añaden los métodos para la obtención, edición y borrado de contactos , de manera individual, en una campaña  ###CitizenCard Se añade la propiedad citizenId en tarjeta ciudadana   ### 0.5.1 *** Se declara el esquema Survey que almacenará valoraciones del ciudadano  ###Solicitudes Se depreca   /crmrequests/{crmRequestId}/bpsprocess Añade el método POST   /crmrequests/{crmRequestId}/survey para almacenar la respuesta a la valoración de la solicitud Se añade la propiedad survey a la solicitud para almacenar la valoración del ciudadano a la atención recibida Se modifica el método en el método /crmrequests/{crmRequestId}/situation la clase del objeto a enviar en el post de CrmRequest a Situation  ###Person Se añade la propiedad surveys para almacenar las valoraciones del ciudadano al servicio prestado por el ayuntamiento Añade el método POST   /persons/survey para almacenar una nueva respuesta de encuesta de valoración del servicio  ###0.5.2 ***  ###Personas   se modifica el método /persons/survey/ a   /persons/survey/{personId} pasando el id de la persona a la que establecer la encuesta    ##0.5.3 ***  ### Auth Se define el método auth/thirdpartylogin para proporcionar login SSO a terceros (ya implementado)  ### Comment Se agregan los campos tipo, codigo y descripcion de la situacion a los comentarios de una solicitud y una interaccion  ##0.5.4 ***  ### Tipos de interacciones  Define la propiedad identificator en el esquema de tipo de interacción Define el método  /interactions/types/{identificator} para obtener un tipo de interacción por su identificador 
 *
 * OpenAPI spec version: 0.5.4-PRIVATE
 * Contact: juancromero@grupotecopy.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Comment } from './comment';
import { CrmParam } from './crmParam';
import { CrmRequest } from './crmRequest';
import { Interaction } from './interaction';
import { InteractionType } from './interactionType';
import { Situation } from './situation';
import { UserBasic } from './userBasic';

/**
 * Interaccion que se captura de forma interactiva a traves de CRM
 */
export interface InteractionInteractive extends Interaction { 
    contactMethod: CrmParam;
    /**
     * Identificador de la llamada grabada, chat , conversación por mensajería proporcionadad por el C7
     */
    contactStoredId?: number;
    /**
     * Solución aportada a la interacción
     */
    resolution: string;
    resolutionUserAgent: UserBasic;
    request?: CrmRequest;
    /**
     * indica si la interacción está aun activa
     */
    active: boolean;
}
export namespace InteractionInteractive {
}