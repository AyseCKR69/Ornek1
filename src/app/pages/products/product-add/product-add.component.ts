import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductModel } from 'src/app/models/Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm = new FormGroup({
    productName: new FormControl('', []),
    productPrice: new FormControl(0, []),
    productPicture: new FormControl('', []),
  });
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {}

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
