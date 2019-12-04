import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {

    const identidad = this.loginService.getIdentidad();
    const token = this.loginService.getToken();

    if (identidad && token) {
      return true;
    } else {
      this.router.navigate(['../']);
      return false;
    }
  }
}
