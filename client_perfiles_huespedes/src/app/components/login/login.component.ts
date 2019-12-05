import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Identidad } from '../../models/identidad';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {};
  formLogin: FormGroup;
  identidad: Identidad = {};
  token: string;

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  constructor(private loginService: LoginService, private router: Router) {
    this.formLogin = this.createFormGroup();
  }

  onResetForm() {
    this.formLogin.reset();
  }

  signIn() {
    if (this.formLogin.valid) {
      this.onSetForm();
      this.loginService.signIn(this.login).subscribe(
        res => {
          console.log(res);
          this.identidad.username = res.Username;
          this.identidad.nombre = res.Nombre;
          this.identidad.apellido = res.Apellido;
          this.identidad.cedula = res.Cedula;
          this.identidad.telefono = res.Telefono;
          this.identidad.email = res.Email;
          this.identidad.id = res.Id;
          this.identidad.role = res.Role[0].authority;
          this.token = res.access_token;
          localStorage.setItem('identidad', JSON.stringify(this.identidad));
          localStorage.setItem('token', this.token);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      );
      this.onResetForm();
    }
  }

  onSetForm() {
    this.login.username = this.formLogin.get('username').value;
    this.login.password = this.formLogin.get('password').value;
    console.log(this.login);
  }

  ngOnInit() {}

  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
