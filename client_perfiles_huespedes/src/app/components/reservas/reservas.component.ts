import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { Reserva } from '../../models/reserva';
import { HomeComponent } from '../../components/home/home.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservas: Reserva[];
  reserva: Reserva;
  idReserva: string;
  identidad: any;

  constructor(private reservasService: ReservasService, private homeComponent: HomeComponent, private loginService: LoginService) {
    this.identidad = this.loginService.getIdentidad();
   }

  ngOnInit() {
    this.getReservas();
  }

  getReservas() {
    this.reservasService.getReservas().subscribe(
      res => {
        this.reservas = res;
        console.log(this.reservas);
      },
      err => console.log(err)
    );
  }

  getReserva(id: string) {
    this.reservasService.getReserva(id).subscribe(
      res => {
        this.reserva = res;
      },
      err => console.log(err)
    );
  }

  deleteReserva(id: string) {
    this.reservasService.deleteReserva(id).subscribe(
      res => {
        console.log(res);
        this.getReservas();
      },
      err => console.log(err)
    );
  }

  updateReserva(reserva: any) {
    console.log(reserva);
    this.homeComponent.setReserva(reserva);
  }

  setId(id: string) {
    this.idReserva = id;
  }

  getId() {
    return this.idReserva;
  }
}
