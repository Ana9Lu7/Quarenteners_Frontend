import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// angular material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

// pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LaudosMedicoPageComponent } from './pages/laudos-medico-page/laudos-medico-page.component';
import { AnaliseExamesPageComponent } from './pages/analise-exames-page/analise-exames-page.component';
import { OrientacaoMedicaPageComponent } from './pages/orientacao-medica-page/orientacao-medica-page.component';
import { TeleconsultaPageComponent } from './pages/teleconsulta-page/teleconsulta-page.component';
import { EspecialistaPageComponent } from './pages/especialista-page/especialista-page.component';
import { AreaRestritaComponent } from './pages/area-restrita/area-restrita.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    LaudosMedicoPageComponent,
    AnaliseExamesPageComponent,
    OrientacaoMedicaPageComponent,
    TeleconsultaPageComponent,
    EspecialistaPageComponent,
    AreaRestritaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
