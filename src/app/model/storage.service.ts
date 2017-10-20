import { Injectable } from '@angular/core'
import { User } from './user';
import { Login } from '../model/login-model';
import { Router } from '@angular/router';

@Injectable()
export class Storage {
  public users: User[] = [];
  constructor(private router: Router) { }
  public addUser(newUser) {
    this.users.push(newUser);
    console.log('added', this.users);
  }

  public getUser() { }

  public checkUser(user: Login) {
    this.users.forEach(a => {
      if ((a.email === user.email) && (a.password === user.password)) {
        console.log('checking user', user);
        this.router.navigate(['test']);
      } else {
        this.router.navigate(['login']);
      }

    });

  }

}
