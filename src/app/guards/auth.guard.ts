import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {TokenStorageService} from "../services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private helperService: JwtHelperService,
    private router: Router,
    private tokenStorage : TokenStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean | UrlTree {
    const token = localStorage.getItem('auth-token');
    if(token && !this.helperService.isTokenExpired(token)) {
      return true;
    }
    if(this.tokenStorage.getUser().roles === 'ROLE_ADMIN' || this.tokenStorage.getUser().roles === 'ROLE_CUSTOMER') {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
