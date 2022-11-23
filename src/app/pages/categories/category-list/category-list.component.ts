import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/Category.model';
import { CategoryServiceService } from '../category.service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categoryList: CategoryModel[] = [];

  constructor(private _categoryService: CategoryServiceService) {}

  ngOnInit(): void {
    this._categoryService.GetCategoryList().subscribe(
      (response) => {
        this.categoryList = response;
      },
      (error) => {}
    );
  }
}
