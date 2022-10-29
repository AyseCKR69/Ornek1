import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ProductModel } from 'src/app/models/Product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.GetProductList().subscribe(
      (response) => {
        this.productList = response;
      },
      (errors) => {}
    );
  }
}
