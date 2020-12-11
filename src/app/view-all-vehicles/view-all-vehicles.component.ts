import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

export interface Vehicle {
  vehicleId: string ;
  vehicleType: string ;
  plateNumber: string ;
  make: string ;
  year: string ;
  model: string ;
  transmission: string ;
  rate: string ;

}

@Component({
  selector: 'app-view-all-vehicles',
  templateUrl: './view-all-vehicles.component.html',
  styleUrls: ['./view-all-vehicles.component.scss']
})
export class ViewAllVehiclesComponent implements OnInit {
 

   vehicleListAll = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAll();
  }

   getAll() {
    console.log('get All');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    this.http.get<any>('http://localhost:8080/getAll', {headers: headers}).subscribe(res => {
        console.log(res);
        this.vehicleListAll = res;
        console.log('list', this.vehicleListAll);
      },
      err => {
        console.log(err);
        console.log('Error occured');
      }
    );
  }
}
