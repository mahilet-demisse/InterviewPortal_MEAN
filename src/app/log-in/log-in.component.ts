import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login-model'
import { Storage } from '../model/storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  model: Login = new Login();
  constructor(private storage: Storage) { }
  ngOnInit() { }

  submit() {
    console.log('login component', this.model);
    this.storage.checkUser(this.model);
  }
}
