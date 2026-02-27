import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environments/environment';
import { User } from './interface/interface';

@Injectable({
  providedIn: 'root',
})
export class UserServicw {

  private apiUrl= environment.apiUrl+"/users";
  constructor(private http: HttpClient){}

  getAllUser(){
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id:number){
    return this.http.get<User>(`${this.apiUrl}/${id}`) 
  }

  getUserByEmail(email:String){
    return this.http.get<User>(`${this.apiUrl}/email/${email}`)
  }
  
}
