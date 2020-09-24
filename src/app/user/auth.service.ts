import { Injectable } from '@angular/core';
import { IUser } from './login/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser: IUser;
  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: Math.random(),
      userName: userName,
      firstName: 'Mohamed',
      lastName: 'Eldeeb'
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

  }
}
