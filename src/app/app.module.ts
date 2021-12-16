import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { MaxDoctorComponent } from './paginas/max-doctor/max-doctor.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule, MatFormFieldControl, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LogoTipoComponent } from './componentes/logo-tipo/logo-tipo.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaxDoctorComponent,
    FormularioComponent,
    FooterComponent,
    LogoTipoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},//Definindo a barra como Link básico da aplicação
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
