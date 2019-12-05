import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  identidad: any;

  constructor(private loginService: LoginService) {
    this.identidad = this.loginService.getIdentidad();
  }

  ngOnInit() {
    console.log(this.identidad);
  }

}
