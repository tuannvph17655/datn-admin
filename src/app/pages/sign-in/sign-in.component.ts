import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../../services/token-storage.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

const AUTH_API = environment.baseUrl;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  roles!: string;
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  helper = new JwtHelperService();

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tokenStorage: TokenStorageService,
    private http: HttpClient,
    private authService : AuthService
  ) { }

  ngOnInit(): void {

  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
  //   //decode jwt
    const { email, password } = this.loginForm.value;
    console.log(email, password);
    const formData = new FormData();
    formData.append('email', email as string);
    formData.append('password', password as string);

    this.http.post(AUTH_API + 'login', formData).subscribe(
      (res: any) => {
        const { accessToken, refreshToken } = res;
        this.tokenStorage.saveToken(accessToken);
        this.tokenStorage.saveRefreshToken(refreshToken);
        const decodedToken = this.helper.decodeToken(accessToken);
        this.roles = this.tokenStorage.getUser().role;
        // if(this.roles === "ROLE_ADMIN" || this.roles === "ROLE_CUSTOMER") {
        console.log('decodedToken : ', decodedToken);
        this.tokenStorage.saveUser(decodedToken);
        console.log(this.roles);
        console.log(res);
        this.toastr.success('Đăng nhập thành công !!');
        const commands = 'admin/pending-orders';
        console.log('res checkout', res);
        this.router.navigate([commands]);
        // window.location.reload();
      // }
      //   window.localStorage.clear();
      //   this.toastr.warning('Tài khoản không có quyền!');
      },
      err => {
        console.log('error', err);
        this.toastr.error('Đăng nhập thất bại !!');
      }
    )
  }

}
