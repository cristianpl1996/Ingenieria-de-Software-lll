import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/empleado';
import { HomeComponent } from '../../components/home/home.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: Empleado[];
  empleado: Empleado;
  idEmpleado: string;

  constructor(private empleadosService: EmpleadosService, private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.getEmpleados();
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
      },
      err => console.log(err)
    );
  }

  deleteEmpleado(id: string) {
    this.empleadosService.deleteEmpleado(id).subscribe(
      res => {
        console.log(res);
        this.getEmpleados();
      },
      err => console.log(err)
    );
  }

  updateEmpleado(empleado: any) {
    console.log(empleado);
    this.homeComponent.setEmpleado(empleado);
  }

  setId(id: string) {
    this.idEmpleado = id;
  }

  getId() {
    return this.idEmpleado;
  }
}
