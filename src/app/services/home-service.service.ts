import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any[]>{
    return this.http
      .get<any[]>('https://anthonyolores.herokuapp.com/getvehicles');
  }
  getspecialvehicles(): Observable<any[]>{
    return this.http
      .get<any[]>('https://anthonyolores.herokuapp.com/getspecialvehicles');
  }
}
