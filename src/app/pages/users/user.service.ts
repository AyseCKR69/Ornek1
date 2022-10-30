import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  AddUser(userModel: UserModel): Observable<UserModel> {
    return this._httpClient.post<UserModel>(
      `${environment.apiUrl}Users`,
      userModel
    );
  }

  GetUserList(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>(`${environment.apiUrl}Users`);
  }
}
