import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LogInData } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  proceedLogin(dataValue: any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/login/signIn", dataValue);
  }

  isLoggedIn() {
    return this.token != null;
  }

  getToken(){
    return this.token!=null?this.token:"";
  }
}
