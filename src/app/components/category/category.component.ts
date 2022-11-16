import {Component, OnInit} from '@angular/core';
import {CategoryReq, CategoryFilter, Category} from 'src/app/models/CategoryReq';
import {CategoryService} from 'src/app/services/category.service';
import {FormControl, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {SidebarComponent} from "../../layouts/sidebar/sidebar.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  createOrUpdateCategoryForm = new FormGroup({
    id : new FormControl('', ),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  public orderStatus = SidebarComponent

  public categories: Category[] = [];
  public page ? = Number;
  public pageSize ? = Number;
  req: any = {
    "id": "",
    "active": "",
    "textSearch": "",
    "pageReq": {
      "page": 0,
      "pageSize": 15,
      "sortField": "",
      "sortDirection": ""
    }
  }

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getListCategory(this.req);
  }

  createCategory() {
    const  categoryReq =  new CategoryReq(this.createOrUpdateCategoryForm.value.id || '',this.createOrUpdateCategoryForm.value.name || '', this.createOrUpdateCategoryForm.value.description || '')
    console.log("categoryReq : ",categoryReq );
    this.categoryService.createCategory(categoryReq).subscribe({
      next: (res: any) => {
        this.toastr.success("Tạo danh mục thành công !");
        this.getListCategory(this.req);
      }, error: (err: any) => {
        console.log("Err : " ,err)
        this.toastr.error("Tạo danh mục thất bại !")
      }
    })
  }

  getListCategory(req: any) {
    this.categoryService.getListCategory(req).subscribe({
      next: (response: any) => {
        this.categories = response.data;
        this.page = response.page;
        this.pageSize = response.pageSize;
        console.log("resposne : ", response);
      }
    })
  }

  fillDataToForm(data : any) {
    this.createOrUpdateCategoryForm.patchValue({
      id: data.id,
      name: data.name,
      description:  data.des,
    })
  }

  deleteCategory(data : any) {
    var req = new CategoryReq(data.id, data.name, data.description);
    this.categoryService.deleteCategory(req).subscribe({
      next : (req : any) => {
      this.toastr.success("Xóa thành công !");
      this.getListCategory(this.req);
      } , error : (err : any) =>{
        this.toastr.error("Xóa thất bại");
      }
    })
  }

}
