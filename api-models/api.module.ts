import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ApikeysService } from './api/apikeys.service';
import { AplicacionesExternasService } from './api/aplicacionesExternas.service';
import { AuditoraService } from './api/auditora.service';
import { AutorizacionesService } from './api/autorizaciones.service';
import { CampaasService } from './api/campaas.service';
import { CustomFormsService } from './api/customForms.service';
import { DashboardsService } from './api/dashboards.service';
import { DashboardsDeUsuariosService } from './api/dashboardsDeUsuarios.service';
import { EstructuraOrganizativaService } from './api/estructuraOrganizativa.service';
import { FaqsService } from './api/faqs.service';
import { FuentesDeDatosService } from './api/fuentesDeDatos.service';
import { GruposService } from './api/grupos.service';
import { IdiomasService } from './api/idiomas.service';
import { IntegracionesService } from './api/integraciones.service';
import { InteraccionesService } from './api/interacciones.service';
import { ParametrizacinService } from './api/parametrizacin.service';
import { PersonasService } from './api/personas.service';
import { ProcesosDeNegocioService } from './api/procesosDeNegocio.service';
import { SegmentsService } from './api/segments.service';
import { SolicitudesService } from './api/solicitudes.service';
import { TarjetaCiudadanaService } from './api/tarjetaCiudadana.service';
import { TiposDeSituacionesService } from './api/tiposDeSituaciones.service';
import { UsersBusControllerService } from './api/usersBusController.service';
import { UsuariosService } from './api/usuarios.service';
import { WidgetsService } from './api/widgets.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ApikeysService,
    AplicacionesExternasService,
    AuditoraService,
    AutorizacionesService,
    CampaasService,
    CustomFormsService,
    DashboardsService,
    DashboardsDeUsuariosService,
    EstructuraOrganizativaService,
    FaqsService,
    FuentesDeDatosService,
    GruposService,
    IdiomasService,
    IntegracionesService,
    InteraccionesService,
    ParametrizacinService,
    PersonasService,
    ProcesosDeNegocioService,
    SegmentsService,
    SolicitudesService,
    TarjetaCiudadanaService,
    TiposDeSituacionesService,
    UsersBusControllerService,
    UsuariosService,
    WidgetsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
