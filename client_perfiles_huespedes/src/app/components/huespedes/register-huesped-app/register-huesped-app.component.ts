import { Component, OnInit } from '@angular/core';
import { HuespedesService } from '../../../services/huespedes.service';
import { Huesped } from '../../../models/huesped';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HuespedesComponent } from '../huespedes.component';

@Component({
  selector: 'app-register-huesped-app',
  templateUrl: './register-huesped-app.component.html',
  styleUrls: ['./register-huesped-app.component.css']
})
export class RegisterHuespedAppComponent implements OnInit {

  huesped: Huesped = {};

  formHuesped: FormGroup;

  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  constructor(private huespedesService: HuespedesService, private huespedesComponent: HuespedesComponent) {
    this.formHuesped = this.createFormGroup();
  }

  onResetForm() {
    this.formHuesped.reset();
  }

  saveHuesped() {
    if (this.formHuesped.valid) {
      this.onSetForm();
      this.huespedesService.saveHuesped(this.huesped).subscribe(
        res => {
          console.log(res);
          alert('Huesped Registrado');
          this.huespedesComponent.getHuespedes();
        },
        err => console.log(err)
      );
      this.onResetForm();
    }
  }

  onSetForm() {
    this.huesped.nombres = this.formHuesped.get('nombres').value;
    this.huesped.apellidos = this.formHuesped.get('apellidos').value;
    this.huesped.cedula = this.formHuesped.get('cedula').value;
    this.huesped.telefono = this.formHuesped.get('telefono').value;
    this.huesped.pais = this.formHuesped.get('pais').value;
    this.huesped.ciudad = this.formHuesped.get('ciudad').value;
    this.huesped.direccion = this.formHuesped.get('direccion').value;
    this.huesped.email = this.formHuesped.get('email').value;
    this.huesped.username = this.formHuesped.get('username').value;
    this.huesped.password = this.formHuesped.get('password').value;
    this.huesped.enabled = true;
    console.log(this.huesped);
  }

  ngOnInit() {
  }

  get nombres() {
    return this.formHuesped.get('nombres');
  }

  get apellidos() {
    return this.formHuesped.get('apellidos');
  }

  get cedula() {
    return this.formHuesped.get('cedula');
  }

  get telefono() {
    return this.formHuesped.get('telefono');
  }

  get pais() {
    return this.formHuesped.get('pais');
  }

  get ciudad() {
    return this.formHuesped.get('ciudad');
  }

  get direccion() {
    return this.formHuesped.get('direccion');
  }

  get email() {
    return this.formHuesped.get('email');
  }

  get username() {
    return this.formHuesped.get('username');
  }

  get password() {
    return this.formHuesped.get('password');
  }

}
