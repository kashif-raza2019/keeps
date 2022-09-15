import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = ["User A", "User B", "User C", "User D"];
  constructor() {
    console.log("UsersService constructor");
  }
  getUsers() {
    return this.users;
  }
}
