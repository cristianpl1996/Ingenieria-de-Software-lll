import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {

    const identidad = this.loginService.getIdentidad();


    if ((identidad.role === 'ROLE_GERENTE') || (identidad.role === 'ROLE_RECEPCIONISTA')) {
      return true;
    } else {
      this.router.navigate(['../']);
      return false;
    }
  }
}
