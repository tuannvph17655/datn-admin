import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {ToastrService} from "ngx-toastr";
import {CategoryService} from "../../services/category.service";
import {Category4Admin} from "../../models/CategoryReq";
import {MaterialService} from "../../services/material.service";
import {Material} from "../../models/Material";

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
