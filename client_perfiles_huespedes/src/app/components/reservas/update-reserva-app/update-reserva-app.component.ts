import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../../services/reservas.service';
import { Reserva } from '../../../models/reserva';
import { HomeComponent } from '../../../components/home/home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-reserva-app',
  templateUrl: './update-reserva-app.component.html',
  styleUrls: ['./update-reserva-app.component.css']
})
export class UpdateReservaAppComponent implements OnInit {

  reserva: any;
  reservaUpdate: Reserva = {};
  formReserva: FormGroup;

  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      numeroHabitaciones: new FormControl('', [Validators.required])
    });
  }

  constructor(private reservasService: ReservasService, private homeComponent: HomeComponent, private router: Router) {
    this.reserva = this.homeComponent.getReserva();
    this.formReserva = this.createFormGroup();
   }

  ngOnInit() {
    console.log(this.reserva);
    this.onActualizar();
  }

  onResetForm() {
    this.formReserva.reset();
  }

  updateReserva() {
    if (this.formReserva.valid) {
      this.onSetForm();
      this.reservasService.updateReserva(this.reserva.id, this.reservaUpdate).subscribe(
        res => {
          console.log(res);
          alert('Reserva Actualizada');
          this.router.navigate(['/home/reservas']);
        },
        err => console.log(err)
      );
      this.onResetForm();
    }
  }

  onActualizar() {
    this.formReserva.get('nombres').setValue(this.reserva.nombres);
    this.formReserva.get('apellidos').setValue(this.reserva.apellidos);
    this.formReserva.get('cedula').setValue(this.reserva.cedula);
    this.formReserva.get('telefono').setValue(this.reserva.telefono);
    this.formReserva.get('email').setValue(this.reserva.email);
    this.formReserva.get('pais').setValue(this.reserva.pais);
    this.formReserva.get('direccion').setValue(this.reserva.direccion);
    this.formReserva.get('ciudad').setValue(this.reserva.ciudad);
    this.formReserva.get('numeroHabitaciones').setValue(this.reserva.numeroHabitaciones);
  }

  onSetForm() {
    this.reservaUpdate.nombres = this.formReserva.get('nombres').value;
    this.reservaUpdate.apellidos = this.formReserva.get('apellidos').value;
    this.reservaUpdate.cedula = this.formReserva.get('cedula').value;
    this.reservaUpdate.telefono = this.formReserva.get('telefono').value;
    this.reservaUpdate.email = this.formReserva.get('email').value;
    this.reservaUpdate.pais = this.formReserva.get('pais').value;
    this.reservaUpdate.ciudad = this.formReserva.get('ciudad').value;
    this.reservaUpdate.direccion = this.formReserva.get('direccion').value;
    this.reservaUpdate.numeroHabitaciones = this.formReserva.get('numeroHabitaciones').value;
  }

  get nombres() {
    return this.formReserva.get('nombres');
  }

  get apellidos() {
    return this.formReserva.get('apellidos');
  }

  get cedula() {
    return this.formReserva.get('cedula');
  }

  get telefono() {
    return this.formReserva.get('telefono');
  }

  get email() {
    return this.formReserva.get('email');
  }

  get pais() {
    return this.formReserva.get('pais');
  }

  get ciudad() {
    return this.formReserva.get('ciudad');
  }

  get direccion() {
    return this.formReserva.get('direccion');
  }

  get numeroHabitaciones() {
    return this.formReserva.get('numeroHabitaciones');
  }

}
