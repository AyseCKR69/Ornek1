import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: UserModel[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.GetUserList().subscribe(
      (response) => {
        this.userList = response;
      },
      (errors) => {}
    );
  }
}
