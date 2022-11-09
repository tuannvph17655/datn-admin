import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {CategoryReq, CategoryFilter, Category} from '../models/CategoryReq';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let auth_token = window.localStorage.getItem('auth-token');

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${auth_token}`
});
const requestOptions = {headers : headers}
const AUTH_API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  createCategory(category : CategoryReq) {
    return this.http.post(AUTH_API + `admin/category/create`,category,requestOptions );
  }

  getListCategory(categoryReq : any) {
    return this.http.post(AUTH_API + `admin/category/search`,categoryReq, requestOptions);
  }


  updateCategory(category : CategoryReq) {
    return this.http.post(AUTH_API + `admin/category/update`,category,requestOptions);
  }
  deleteCategory(category : CategoryReq) {
    return this.http.post(AUTH_API + `admin/category/delete`,category,requestOptions);
  }
}
