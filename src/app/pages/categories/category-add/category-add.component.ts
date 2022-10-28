import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryModel } from 'src/app/models/Category.model';
import { CategoryServiceService } from '../category.service.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  categoryAddForm = new FormGroup({
    categoryName: new FormControl('', []),
  });
  constructor(private _categoryService: CategoryServiceService) {}
  ngOnInit(): void {}

  onnSubmit() {
    this._categoryService
      .AddCategory(this.categoryAddForm.value as CategoryModel)
      .subscribe(
        (response) => {
          console.warn(response);
        },
        (errors) => {
          console.error(errors);
        }
      );
  }
}
