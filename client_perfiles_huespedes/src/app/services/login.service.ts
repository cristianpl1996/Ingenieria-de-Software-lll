import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:8080/oauth/token';
  identidad: any;
  token: string;

  constructor(private http: HttpClient) { }

  signIn(login: Login): Observable<any> {
    const credenciales = btoa('angularapp' + ':' + '12345');
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', Authorization: 'Basic ' + credenciales});
    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', login.username);
    params.set('password', login.password);
    return this.http.post<any>(`${this.API_URI}`, params.toString(), {headers});
  }

  getIdentidad() {
    const identidad = JSON.parse(localStorage.getItem('identidad'));
    if (identidad && identidad != null && identidad !== undefined && identidad !== 'udenfined') {
        this.identidad = identidad;
    } else {
        this.identidad = null;
    }
    return this.identidad;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token && token != null && token !== undefined && token !== 'udenfined') {
        this.token = token;
    } else {
        this.token = null;
    }
    return this.token;
  }
}
