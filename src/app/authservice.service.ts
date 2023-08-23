import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isSellerLoggedIn = new BehaviorSubject<boolean>(false);
 private isUserLoggedIn = new BehaviorSubject<boolean>(false)
  constructor() { }

  getIsSellerLoggedIn() {
    return this.isSellerLoggedIn.asObservable();
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn.asObservable();
  }

  login() {
    // Simulate a successful login
    this.isSellerLoggedIn.next(true);
    this.isUserLoggedIn.next(true);
  }

  logout() {
    // Simulate a logout
    this.isSellerLoggedIn.next(false);
    this.isUserLoggedIn.next(false);
  }
}
