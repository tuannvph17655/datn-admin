import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {FilterOrderRequest} from "../models/FilterOrderRequest";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let auth_token = window.localStorage.getItem('auth-token');

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${auth_token}`
});

const requestOptions = { headers: headers };

const AUTH_API = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getListOrder(filter : FilterOrderRequest): Observable<any>{
    return this.http.get<any>(AUTH_API + `admin/order/listOrder?startDate=${filter.startDate}&endDate=${filter.endDate}&totalPrice=${filter.totalPrice}&payed=${filter.payed}&statusValue=${filter.statusValue}&textSearch=${filter.textSearch}`, requestOptions);
  }
}
