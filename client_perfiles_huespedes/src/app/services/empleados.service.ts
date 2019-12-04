import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URI = 'http://localhost:8080/api';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.API_URI}/empleados`);
  }

  getEmpleado(id: string): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.API_URI}/empleados/${id}`);
  }

  saveEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.API_URI}/empleados`, empleado, {headers: this.headers});
  }

  updateEmpleado(id: string, updateEmpleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.API_URI}/empleados/${id}`, updateEmpleado, {headers: this.headers});
  }

  deleteEmpleado(id: string) {
    return this.http.delete(`${this.API_URI}/empleados/${id}`);
  }
}
