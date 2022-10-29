import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderStatus } from '../models/OrderStatus';


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
export class ChangeStatusService {
  
  constructor(private http : HttpClient) { }

  changeStatusOrder(changeStatus: any):Observable<any> {
    return this.http.post<any>(AUTH_API + 'admin/order/change-status', changeStatus,requestOptions);
  }
}
