import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {TokenStorageService} from "./token-storage.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const AUTH_API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private helper: JwtHelperService,
    private http: HttpClient
  ) { }

  login(formData: any): Observable<any> {
    return this.http.post(AUTH_API + 'login',formData, httpOptions);
  }

  refreshToken(token: string) {
    return this.http.post(AUTH_API + 'refreshtoken', {
      refreshToken: token
    }, httpOptions);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('auth-token') as string;
    return !this.helper.isTokenExpired(token);
  }

  public canAccess( decodeToken  : any
    ):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean | UrlTree {
    if(decodeToken.getUser().roles === 'ROLE_ADMIN' || decodeToken.getUser().roles === 'ROLE_CUSTOMER') {
      return true;
    }
    return false;
  }



}
