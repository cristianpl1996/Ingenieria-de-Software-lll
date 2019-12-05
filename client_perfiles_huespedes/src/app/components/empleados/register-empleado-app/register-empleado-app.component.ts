import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../../services/empleados.service';
import { Empleado } from '../../../models/empleado';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosComponent } from '../empleados.component';

@Component({
  selector: 'app-register-empleado-app',
  templateUrl: './register-empleado-app.component.html',
  styleUrls: ['./register-empleado-app.component.css']
})
export class RegisterEmpleadoAppComponent implements OnInit {

  empleado: Empleado = {};

  formEmpleado: FormGroup;

  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  constructor(private empleadosService: EmpleadosService, private empleadosComponent: EmpleadosComponent) {
    this.formEmpleado = this.createFormGroup();
  }

  onResetForm() {
    this.formEmpleado.reset();
  }

  saveHuesped() {
    if (this.formEmpleado.valid) {
      this.onSetForm();
      this.empleadosService.saveEmpleado(this.empleado).subscribe(
        res => {
          console.log(res);
          alert('Empleado Registrado');
          this.empleadosComponent.getEmpleados();
        },
        err => console.log(err)
      );
      this.onResetForm();
    }
  }

  onSetForm() {
    this.empleado.nombres = this.formEmpleado.get('nombres').value;
    this.empleado.apellidos = this.formEmpleado.get('apellidos').value;
    this.empleado.cedula = this.formEmpleado.get('cedula').value;
    this.empleado.telefono = this.formEmpleado.get('telefono').value;
    this.empleado.email = this.formEmpleado.get('email').value;
    this.empleado.username = this.formEmpleado.get('username').value;
    this.empleado.password = this.formEmpleado.get('password').value;
    this.empleado.enabled = true;
    console.log(this.empleado);
  }

  ngOnInit() {
  }

  get nombres() {
    return this.formEmpleado.get('nombres');
  }

  get apellidos() {
    return this.formEmpleado.get('apellidos');
  }

  get cedula() {
    return this.formEmpleado.get('cedula');
  }

  get telefono() {
    return this.formEmpleado.get('telefono');
  }

  get email() {
    return this.formEmpleado.get('email');
  }

  get username() {
    return this.formEmpleado.get('username');
  }

  get password() {
    return this.formEmpleado.get('password');
  }

}
