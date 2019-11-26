import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormazioniComponent } from './formazioni/formazioni.component';
import { SchieraFormazioneComponent } from './schiera-formazione/schiera-formazione.component';
import { RegolamentoComponent } from './regolamento/regolamento.component';
import { QuotazioniComponent } from './quotazioni/quotazioni.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    HomepageComponent,
    FormazioniComponent,
    SchieraFormazioneComponent,
    RegolamentoComponent,
    QuotazioniComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
