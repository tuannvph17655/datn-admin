import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {ToastrService} from "ngx-toastr";
import {CategoryService} from "../../services/category.service";
import {Category4Admin} from "../../models/CategoryReq";
import {MaterialService} from "../../services/material.service";
import {Material} from "../../models/Material";
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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[] = [];
  public categories: Category4Admin[] = [];
  public materials: Material[] = [];
  req: any = {
    "id": "",
    "active": "",
    "textSearch": "",
    "minPrice": "",
    "maxPrice": "",
    "pageReq": {
      "page": 0,
      "pageSize": 15,
      "sortField": "",
      "sortDirection": ""
    }
  }

  constructor(private productService: ProductService,
              private toastr: ToastrService,
              private categoryService: CategoryService,
              private materialService: MaterialService) {
  }

  ngOnInit(): void {
    this.getListProduct(this.req);
    this.getListCategory();
    this.getListMaterial();
  }

  getListProduct(req: any) {
    this.productService.getListProduct(req).subscribe({
      next: (req: any) => {
        this.products = req.data;
      }, error: (err: any) => {
        this.toastr.error("Không có danh sách sản phẩm !")
      }
    })
  }

  getListCategory() {
    this.categoryService.getAllCategory().subscribe({
      next: (req: any) => {
        this.categories = req.data;
        console.log("Category : ", this.categories);
      }
    })
  }

  getListMaterial() {
    this.materialService.getAllMaterial().subscribe({
      next: (req: any) => {
        this.materials = req.data;
        console.log("mat : ", this.materials);
      }, error : (err : any) => {
        this.toastr.error("Không có danh sách chất liệu !");
      }
    })
  }

}
