import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  identidad: any;
  token: string;
  reserva: any;

  constructor(private loginService: LoginService, private router: Router) {
    this.identidad = this.loginService.getIdentidad();
    this.token = this.loginService.getToken();
  }

  ngOnInit() {
    console.log(this.reserva);
  }

  logOut() {
    localStorage.clear();
    this.identidad = null;
    this.token = null;
    this.router.navigate(['/']);
  }

  setReserva(reserva: any) {
    this.reserva = reserva;
  }

  getReserva() {
    return this.reserva;
  }
}
