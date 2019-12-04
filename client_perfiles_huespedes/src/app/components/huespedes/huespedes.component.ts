import { Component, OnInit } from '@angular/core';
import { HuespedesService } from '../../services/huespedes.service';
import { Huesped } from '../../models/huesped';


@Component({
  selector: 'app-huespedes',
  templateUrl: './huespedes.component.html',
  styleUrls: ['./huespedes.component.css']
})
export class HuespedesComponent implements OnInit {

  huespedes: Huesped[];
  huesped: Huesped;

  constructor(private huespedesService: HuespedesService) { }

  ngOnInit() {
    this.getHuespedes();
    this.getHuesped('1');
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
      },
      err => console.log(err)
    );
  }

  saveHuesped(huesped: Huesped) {
    this.huespedesService.saveHuesped(huesped).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  updateEmpleado(id: string, huesped: Huesped) {
    this.huespedesService.updateHuesped(id, huesped).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
