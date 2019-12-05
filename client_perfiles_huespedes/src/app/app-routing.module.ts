import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterHuespedComponent } from './components/register-huesped/register-huesped.component';
import { RegisterReservaComponent } from './components/register-reserva/register-reserva.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterReservaAppComponent } from './components/reservas/register-reserva-app/register-reserva-app.component';
import { UpdateReservaAppComponent } from './components/reservas/update-reserva-app/update-reserva-app.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registerhuesped', component: RegisterHuespedComponent },
  { path: 'registerreserva', component: RegisterReservaComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'huespedes', component: HuespedesComponent },
    { path: 'reservas', component: ReservasComponent, children: [
      { path: '', component: RegisterReservaAppComponent }
    ] },
    { path: 'updatereserva', component: UpdateReservaAppComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
