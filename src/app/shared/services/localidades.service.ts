import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  localidadesUrl = 'localidades/estados'
  urlService = 'https://servicodados.ibge.gov.br/api/v1/'

  constructor(protected http: HttpClient) {}

  obterEstados(){
    return this.http.get(this.urlService + this.localidadesUrl)
  }
}

