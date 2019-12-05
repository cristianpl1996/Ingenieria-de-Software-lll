import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterHuespedComponent } from './components/register-huesped/register-huesped.component';
import { RegisterReservaComponent } from './components/register-reserva/register-reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterReservaAppComponent } from './components/reservas/register-reserva-app/register-reserva-app.component';
import { UpdateReservaAppComponent } from './components/reservas/update-reserva-app/update-reserva-app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    HuespedesComponent,
    ReservasComponent,
    LoginComponent,
    HomeComponent,
    RegisterHuespedComponent,
    RegisterReservaComponent,
    RegisterReservaAppComponent,
    UpdateReservaAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
