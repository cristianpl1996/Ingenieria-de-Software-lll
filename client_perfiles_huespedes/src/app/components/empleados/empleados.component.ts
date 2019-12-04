import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: Empleado[];
  empleado: Empleado;

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
    this.getEmpleados();
    this.getEmpleado('1');
  }

  getEmpleados() {
    this.empleadosService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
        console.log(this.empleados);
      },
      err => console.log(err)
    );
  }

  getEmpleado(id: string) {
    this.empleadosService.getEmpleado(id).subscribe(
      res => {
        this.empleado = res;
        console.log(this.empleado);
      },
      err => console.log(err)
    );
  }

  deleteEmpleado(id: string) {
    this.empleadosService.deleteEmpleado(id).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  saveEmpleado(empleado: Empleado) {
    this.empleadosService.saveEmpleado(empleado).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  updateEmpleado(id: string, empleado: Empleado) {
    this.empleadosService.updateEmpleado(id, empleado).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
