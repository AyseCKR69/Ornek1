import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/models/Category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  constructor(private _httpClient: HttpClient) {}

  AddCategory(categoryModel: CategoryModel): Observable<CategoryModel> {
    return this._httpClient.post<CategoryModel>(
      `${environment.apiUrl}Categories`,
      categoryModel
    );
  }
  GetCategoryList(): Observable<CategoryModel[]> {
    return this._httpClient.get<CategoryModel[]>(
      `${environment.apiUrl}Categories`
    );
  }
}
