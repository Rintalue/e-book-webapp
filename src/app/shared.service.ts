import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  private loginFormActive = new BehaviorSubject<boolean>(false);

  toggleLoginForm() {
    this.loginFormActive.next(!this.loginFormActive.value);
  }

  getLoginFormActive() {
    return this.loginFormActive.asObservable();
  }
}

