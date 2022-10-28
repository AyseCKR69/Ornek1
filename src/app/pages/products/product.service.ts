import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductModel } from 'src/app/models/Product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  AddProduct(productModel: ProductModel):Observable<ProductModel> {
    return this._httpClient.post<ProductModel>
    (`${environment.apiUrl}Products`, productModel);
      
  }
}
