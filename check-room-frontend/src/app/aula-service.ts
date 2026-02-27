import { Injectable } from '@angular/core';
import { environment } from './environments/environment';
import { HttpClient } from '@angular/common/http';
import { Aula } from './interface/interface';


@Injectable({
  providedIn: 'root',
})
export class AulaService {

  private api:string= environment.apiUrl+"/aula"
  private constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<Aula[]>(this.api);
  }
  
}
