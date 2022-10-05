import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories : Category [] = [];
  public category !: Category;
  constructor(
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.getListCategory();
  }

  private getListCategory() {
    this.categoryService.getListCategory().subscribe({
      next : (response: any ) => {
        this.categories = response.content;
        console.log(this.categories);
      }
    })
  }

  private getCategory(id : BigInt) {
    this.categoryService.getCategory(id).subscribe({
      next : (res:any) => {
        console.log("category detail" , res);
        this.category = res.data;
      },error: (err) => {
        console.log('errr', err)
      }
    })
  }

}
