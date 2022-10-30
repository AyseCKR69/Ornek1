import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  
  userAddForm = new FormGroup({
    userName: new FormControl('', []),
    userMail: new FormControl('', []),
    userPassword: new FormControl('', []),
  });

  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  OnSubmit() {
    this._userService.AddUser(this.userAddForm.value as UserModel).subscribe(
      (response) => {
        console.warn(response);
      },
      (errors) => {
        console.error(errors);
      }
    );
  }
}
