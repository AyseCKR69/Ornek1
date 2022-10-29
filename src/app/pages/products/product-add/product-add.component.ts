import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryModel } from 'src/app/models/Category.model';
import { ProductModel } from 'src/app/models/Product.model';
import { CategoryServiceService } from '../../categories/category.service.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  categoryList: CategoryModel[] = [];

  productAddForm = new FormGroup({
    categoryId: new FormControl(0),
    productName: new FormControl('', []),
    productPrice: new FormControl(0, []),
    productPicture: new FormControl('', []),
  });
  constructor(
    private _productService: ProductService,
    private _categoryService: CategoryServiceService
  ) {}

  ngOnInit(): void {
    this._categoryService.GetCategoryList().subscribe(
      (response) => {
        this.categoryList = response;
      },
      (errors) => {}
    );
  }

  onSubmit() {
    this._productService
      .AddProduct(this.productAddForm.value as ProductModel)
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
