import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  // 'Authorization': `Bearer ${auth_token}`
});

const AUTH_API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  public getListCategory() : Observable<Category[]>{
    return this.http.get<Category[]>(AUTH_API + "category/find-category");
  }

  public getCategory(categoryId : BigInt) {
    return this.http.get(AUTH_API + 'find-by-id/' + categoryId);
  }

}
