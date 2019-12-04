import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { ReservasComponent } from './components/reservas/reservas.component';


const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'huespedes', component: HuespedesComponent },
  { path: 'reservas', component: ReservasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
