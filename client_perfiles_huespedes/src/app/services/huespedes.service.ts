import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Huesped } from '../models/huesped';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuespedesService {

  API_URI = 'http://localhost:8080/api';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getHuespedes(): Observable<Huesped[]> {
    return this.http.get<Huesped[]>(`${this.API_URI}/huespedes`);
  }

  getHuesped(id: string): Observable<Huesped> {
    return this.http.get<Huesped>(`${this.API_URI}/huespedes/${id}`);
  }

  saveHuesped(huesped: Huesped): Observable<Huesped> {
    return this.http.post<Huesped>(`${this.API_URI}/huespedes`, huesped, {headers: this.headers});
  }

  updateHuesped(id: string, updateHuesped: Huesped): Observable<Huesped> {
    return this.http.put<Huesped>(`${this.API_URI}/huespedes/${id}`, updateHuesped, {headers: this.headers});
  }

  deleteHuesped(id: string) {
    return this.http.delete(`${this.API_URI}/huespedes/${id}`);
  }
}
