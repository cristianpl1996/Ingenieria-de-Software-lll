import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterHuespedComponent } from './components/register-huesped/register-huesped.component';
import { RegisterReservaComponent } from './components/register-reserva/register-reserva.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'huespedes', component: HuespedesComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: '', component: LoginComponent },
  { path: 'registerhuesped', component: RegisterHuespedComponent },
  { path: 'registerreserva', component: RegisterReservaComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
