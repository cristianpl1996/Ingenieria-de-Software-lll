import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterHuespedComponent } from './components/register-huesped/register-huesped.component';
import { RegisterReservaComponent } from './components/register-reserva/register-reserva.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterReservaAppComponent } from './components/reservas/register-reserva-app/register-reserva-app.component';
import { UpdateReservaAppComponent } from './components/reservas/update-reserva-app/update-reserva-app.component';
import { RegisterHuespedAppComponent } from './components/huespedes/register-huesped-app/register-huesped-app.component';
import { UpdateHuespedAppComponent } from './components/huespedes/update-huesped-app/update-huesped-app.component';
import { RegisterEmpleadoAppComponent } from './components/empleados/register-empleado-app/register-empleado-app.component';
import { UpdateEmpleadoAppComponent } from './components/empleados/update-empleado-app/update-empleado-app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registerhuesped', component: RegisterHuespedComponent },
  { path: 'registerreserva', component: RegisterReservaComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', component: ProfileComponent },
    { path: 'empleados', component: EmpleadosComponent, children: [
      { path: '', component: RegisterEmpleadoAppComponent }
    ] },
    { path: 'huespedes', component: HuespedesComponent, children: [
      { path: '', component: RegisterHuespedAppComponent }
    ] },
    { path: 'reservas', component: ReservasComponent, children: [
      { path: '', component: RegisterReservaAppComponent }
    ] },
    { path: 'updatereserva', component: UpdateReservaAppComponent },
    { path: 'updatehuesped', component: UpdateHuespedAppComponent },
    { path: 'updateempleado', component: UpdateEmpleadoAppComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
