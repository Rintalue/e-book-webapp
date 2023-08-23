import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../authservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginFormActive: boolean = false;
loginFormActiveSubscription: Subscription;
public loginForm!: FormGroup

  constructor(private authService:AuthService,private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private sharedService: SharedService) {
    this.loginFormActiveSubscription = this.sharedService
      .getLoginFormActive()
      .subscribe((isActive) => {
        this.loginFormActive = isActive;
      });
  }

  ngOnInit(): void {
    this.loginForm= this.formbuilder.group({
      username:[''],
      password:['']
    })
  }

login(){
  this.http.get<any>("http://localhost:3000/signUpUsers")
  .subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
    });
    if (user){
    alert("Login Successful");
    this.authService.login();
    this.router.navigate(['landingpage'])
    this.sharedService.toggleLoginForm();
    }else{
      alert("User not Found, Wrong username or password");
    }
  },err=>{
    alert("Not Successful")
  })
  }
  toggleLoginForm() {
    this.sharedService.toggleLoginForm();
  }
  ngOnDestroy() {
    this.loginFormActiveSubscription.unsubscribe();
  }
}
