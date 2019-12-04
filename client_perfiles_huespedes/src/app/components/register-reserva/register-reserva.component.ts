import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { Reserva } from '../../models/reserva';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-reserva',
  templateUrl: './register-reserva.component.html',
  styleUrls: ['./register-reserva.component.css']
})
export class RegisterReservaComponent implements OnInit {

  reserva: Reserva = {};

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

  constructor(private reservasService: ReservasService, private router: Router) {
    this.formReserva = this.createFormGroup();
  }

  onResetForm() {
    this.formReserva.reset();
  }

  saveReserva() {
    if (this.formReserva.valid) {
      this.onSetForm();
      this.reservasService.saveReserva(this.reserva).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
          alert('Reserva Registrada');
        },
        err => console.log(err)
      );
      this.onResetForm();
    }
  }

  onSetForm() {
    this.reserva.nombres = this.formReserva.get('nombres').value;
    this.reserva.apellidos = this.formReserva.get('apellidos').value;
    this.reserva.cedula = this.formReserva.get('cedula').value;
    this.reserva.telefono = this.formReserva.get('telefono').value;
    this.reserva.email = this.formReserva.get('email').value;
    this.reserva.pais = this.formReserva.get('pais').value;
    this.reserva.ciudad = this.formReserva.get('ciudad').value;
    this.reserva.direccion = this.formReserva.get('direccion').value;
    this.reserva.numeroHabitaciones = this.formReserva.get('numeroHabitaciones').value;
    console.log(this.reserva);
  }

  ngOnInit() {
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
