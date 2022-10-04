import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];

  constructor(private categoryService : CategoryService) { }



  ngOnInit(): void {
    this.getListCategory();
  }

  getListCategory() {
    this.categoryService.getListCategory().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

}
