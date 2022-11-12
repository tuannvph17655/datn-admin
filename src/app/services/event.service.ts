import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
let auth_token = window.localStorage.getItem('auth-token');

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${auth_token}`
});
const requestOptions = {headers: headers}
const AUTH_API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getListEvent(req : any) {
    return this.http.post(AUTH_API + `admin/event/search`, req, requestOptions);
  }
}
