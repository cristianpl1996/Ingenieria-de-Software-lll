import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../../services/empleados.service';
import { Empleado } from '../../../models/empleado';
import { HomeComponent } from '../../../components/home/home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-empleado-app',
  templateUrl: './update-empleado-app.component.html',
  styleUrls: ['./update-empleado-app.component.css']
})
export class UpdateEmpleadoAppComponent implements OnInit {

  empleado: any;
  empleadoUpdate: Empleado = {};

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

  constructor(private empleadosService: EmpleadosService, private homeComponent: HomeComponent, private router: Router) {
    this.empleado = this.homeComponent.getEmpleado();
    this.formEmpleado = this.createFormGroup();
   }

   ngOnInit() {
    console.log(this.empleado);
    this.onActualizar();
  }

  onResetForm() {
    this.formEmpleado.reset();
  }

  updateEmpleado() {
    if (this.formEmpleado.valid) {
      this.onSetForm();
      this.empleadosService.updateEmpleado(this.empleado.id, this.empleadoUpdate).subscribe(
        res => {
          console.log(res);
          alert('Empleado Actualizado');
          this.router.navigate(['/home/empleados']);
        },
        err => console.log(err)
      );
      this.onResetForm();
    }
  }

  onActualizar() {
    this.formEmpleado.get('nombres').setValue(this.empleado.nombres);
    this.formEmpleado.get('apellidos').setValue(this.empleado.apellidos);
    this.formEmpleado.get('cedula').setValue(this.empleado.cedula);
    this.formEmpleado.get('telefono').setValue(this.empleado.telefono);
    this.formEmpleado.get('email').setValue(this.empleado.email);
    this.formEmpleado.get('username').setValue(this.empleado.email);
    this.formEmpleado.get('password').setValue(this.empleado.password);
  }

  onSetForm() {
    this.empleadoUpdate.nombres = this.formEmpleado.get('nombres').value;
    this.empleadoUpdate.apellidos = this.formEmpleado.get('apellidos').value;
    this.empleadoUpdate.cedula = this.formEmpleado.get('cedula').value;
    this.empleadoUpdate.telefono = this.formEmpleado.get('telefono').value;
    this.empleadoUpdate.email = this.formEmpleado.get('email').value;
    this.empleadoUpdate.username = this.formEmpleado.get('username').value;
    this.empleadoUpdate.password = this.formEmpleado.get('password').value;
    this.empleadoUpdate.enabled = true;
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
