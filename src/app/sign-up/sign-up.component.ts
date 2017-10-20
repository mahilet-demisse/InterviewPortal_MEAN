import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {Users} from '../model/users';
import {Storage} from '../model/storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();

  constructor(private storage:Storage) { }

  ngOnInit() {

  }

  submit() {
    console.log("sign up component", this.user);
    this.storage.addUser(this.user);

  }
}
