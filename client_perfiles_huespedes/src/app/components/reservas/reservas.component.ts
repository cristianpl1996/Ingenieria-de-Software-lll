import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservas: Reserva[];
  reserva: Reserva;

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.getReservas();
    this.getReserva('1');
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
        console.log(this.reserva);
      },
      err => console.log(err)
    );
  }

  deleteReserva(id: string) {
    this.reservasService.deleteReserva(id).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  saveReserva(reserva: Reserva) {
    this.reservasService.saveReserva(reserva).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  updateReserva(id: string, reserva: Reserva) {
    this.reservasService.updateReserva(id, reserva).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }


}
