import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductOption} from "../../models/ProductOption";
import {ProductOptionService} from "../../services/product-option.service";
import {ColorService} from "../../services/color.service";
import {ColorResponse} from "../../models/Color";
import {SizeService} from "../../services/size.service";
import {SizeResponse} from "../../models/Size";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn4iPmu8exd4BSNWuUEGSay4RW4f6tGtA",
  authDomain: "datn-63761.firebaseapp.com",
  projectId: "datn-63761",
  storageBucket: "datn-63761.appspot.com",
  messagingSenderId: "429679348592",
  appId: "1:429679348592:web:26ed22834ab368ed3e1db5",
  measurementId: "G-DXFVXD85VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-product-option',
  templateUrl: './product-option.component.html',
  styleUrls: ['./product-option.component.css']
})
export class ProductOptionComponent implements OnInit {
  public path = "";
  id !: string;
  public productOptions: ProductOption[] = [];
  public colors: ColorResponse[] = [];
  public sizes: SizeResponse[] = [];
  req: any = {
    "sizeId": "",
    "colorId": "",
    "productId": "",
    "pageReq": {
      "page": 0,
      "pageSize": 15,
      "sortField": "",
      "sortDirection": ""
    },
  }

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private productionOptionService: ProductOptionService,
    private colorService: ColorService,
    private sizeService: SizeService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.req.productId = this.id;
    this.getListProductOption(this.req);
    this.getListSize();
    this.getListColor();
  }

  getListProductOption(productReq: any) {
    this.productionOptionService.getAllProductOptionByProduct(productReq).subscribe({
      next: (req: any) => {
        this.productOptions = req.data;
        console.log("product option : ", this.productOptions);
        console.log("id ", this.id)
      }
    })
  }

  getListColor() {
    this.colorService.listColor().subscribe({
      next: (req: any) => {
        this.colors = req.data;
      }
    })
  }

  getListSize() {
    this.sizeService.getListSize().subscribe({
      next: (req: any) => {
        this.sizes = req.data;
      }
    })
  }

  uploadImage(e : any) {
    this.path = e.target.files[0];
  }

  save() {
    console.log("file " , this.path);
  }

}
