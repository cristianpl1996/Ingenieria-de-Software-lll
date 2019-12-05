import { Component, OnInit } from '@angular/core';
import { HuespedesService } from '../../services/huespedes.service';
import { Huesped } from '../../models/huesped';
import { HomeComponent } from '../../components/home/home.component';


@Component({
  selector: 'app-huespedes',
  templateUrl: './huespedes.component.html',
  styleUrls: ['./huespedes.component.css']
})
export class HuespedesComponent implements OnInit {

  huespedes: Huesped[];
  huesped: Huesped;
  idHuesped: string;

  constructor(private huespedesService: HuespedesService, private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.getHuespedes();
  }

  getHuespedes() {
    this.huespedesService.getHuespedes().subscribe(
      res => {
        this.huespedes = res;
        console.log(this.huespedes);
      },
      err => console.log(err)
    );
  }

  getHuesped(id: string) {
    this.huespedesService.getHuesped(id).subscribe(
      res => {
        this.huesped = res;
        console.log(this.huesped);
      },
      err => console.log(err)
    );
  }

  deleteHuesped(id: string) {
    this.huespedesService.deleteHuesped(id).subscribe(
      res => {
        console.log(res);
        this.getHuespedes();
      },
      err => console.log(err)
    );
  }

  updateHuesped(huesped: any) {
    console.log(huesped);
    this.homeComponent.setHuesped(huesped);
  }

  setId(id: string) {
    this.idHuesped = id;
  }

  getId() {
    return this.idHuesped;
  }
}
