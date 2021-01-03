import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { CorreoComponent } from './Components/correo/correo.component';
import { ListaCorreosComponent } from './Components/lista-correos/lista-correos.component';
import { NuevoCorreoComponent } from './Components/nuevo-correo/nuevo-correo.component';
import { AvisosComponent } from './Components/avisos/avisos.component';
import { LoginComponent } from './Components/login/login.component';

//material libs
import { MaterialModule } from './Modules/material/material.module';

import {
  GoogleApiModule,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
} from "ng-gapi";

//Vistas
import { MenuComponent } from './Menu/menu/menu.component';
import { EnviarComponent } from './Views/enviar/enviar.component';
import { HomeComponent } from './Views/home/home.component';
import { VisualizarCorreoComponent } from './Views/visualizar-correo/visualizar-correo.component';
import { CorreosRecibidosComponent } from './Views/correos-recibidos/correos-recibidos.component';


let gapiClientConfig: NgGapiClientConfig = {
  client_id: "761731459748-44dnl8nsvnomh9de03e9kscmmtg5ghe6.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "popup",
  redirect_uri: "http://localhost:4200/loged",
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/gmail.labels",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly"
  ].join(" ")
};

//fichero que esta toda la informacion de las importaciones
@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent,
    NuevoCorreoComponent,
    AvisosComponent,
    CorreosRecibidosComponent,
    LoginComponent,
    MenuComponent,
    EnviarComponent,
    HomeComponent,
    VisualizarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
