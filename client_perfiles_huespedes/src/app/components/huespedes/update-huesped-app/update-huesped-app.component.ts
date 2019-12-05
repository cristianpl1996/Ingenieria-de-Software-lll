import { Component, OnInit } from '@angular/core';
import { HuespedesService } from '../../../services/huespedes.service';
import { Huesped } from '../../../models/huesped';
import { HomeComponent } from '../../../components/home/home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-huesped-app',
  templateUrl: './update-huesped-app.component.html',
  styleUrls: ['./update-huesped-app.component.css']
})
export class UpdateHuespedAppComponent implements OnInit {

  huesped: any;
  huespedUpdate: Huesped = {};

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

  constructor(private huespedesService: HuespedesService, private homeComponent: HomeComponent, private router: Router) {
    this.huesped = this.homeComponent.getHuesped();
    this.formHuesped = this.createFormGroup();
   }

  ngOnInit() {
    console.log(this.huesped);
    this.onActualizar();
  }

  onResetForm() {
    this.formHuesped.reset();
  }

  updateHuesped() {
    if (this.formHuesped.valid) {
      this.onSetForm();
      this.huespedesService.updateHuesped(this.huesped.id, this.huespedUpdate).subscribe(
        res => {
          console.log(res);
          alert('Huesped Actualizado');
          this.router.navigate(['/home/huespedes']);
        },
        err => console.log(err)
      );
      this.onResetForm();
    }
  }

  onActualizar() {
    this.formHuesped.get('nombres').setValue(this.huesped.nombres);
    this.formHuesped.get('apellidos').setValue(this.huesped.apellidos);
    this.formHuesped.get('cedula').setValue(this.huesped.cedula);
    this.formHuesped.get('telefono').setValue(this.huesped.telefono);
    this.formHuesped.get('pais').setValue(this.huesped.pais);
    this.formHuesped.get('ciudad').setValue(this.huesped.ciudad);
    this.formHuesped.get('direccion').setValue(this.huesped.direccion);
    this.formHuesped.get('email').setValue(this.huesped.email);
    this.formHuesped.get('username').setValue(this.huesped.email);
    this.formHuesped.get('password').setValue(this.huesped.password);
  }

  onSetForm() {
    this.huespedUpdate.nombres = this.formHuesped.get('nombres').value;
    this.huespedUpdate.apellidos = this.formHuesped.get('apellidos').value;
    this.huespedUpdate.cedula = this.formHuesped.get('cedula').value;
    this.huespedUpdate.telefono = this.formHuesped.get('telefono').value;
    this.huespedUpdate.pais = this.formHuesped.get('pais').value;
    this.huespedUpdate.ciudad = this.formHuesped.get('ciudad').value;
    this.huespedUpdate.direccion = this.formHuesped.get('direccion').value;
    this.huespedUpdate.email = this.formHuesped.get('email').value;
    this.huespedUpdate.username = this.formHuesped.get('username').value;
    this.huespedUpdate.password = this.formHuesped.get('password').value;
    this.huespedUpdate.enabled = true;
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
