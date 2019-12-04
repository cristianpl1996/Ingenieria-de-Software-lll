import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserva } from '../models/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  API_URI = 'http://localhost:8080/api';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.API_URI}/reservas`);
  }

  getReserva(id: string): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.API_URI}/reservas/${id}`);
  }

  saveReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(`${this.API_URI}/reservas`, reserva);
  }

  updateReserva(id: string, updateReserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.API_URI}/reservas/${id}`, updateReserva);
  }

  deleteReserva(id: string) {
    return this.http.delete(`${this.API_URI}/reservas/${id}`);
  }
}
