import { Injectable } from '@angular/core';
import { environment } from './environments/environment';
import { HttpClient } from '@angular/common/http';
import { Prenotazione, PrenotazioneF } from './interface/interface';

@Injectable({
  providedIn: 'root',
})
export class PrenotazioneService {

  private api: string= environment.apiUrl + "/prenotazione";


  constructor(private http: HttpClient){}
  
  creaPrenotazione(prenotazione:PrenotazioneF){
    return this.http.post<PrenotazioneF>(this.api, prenotazione);
  }
  
}
