import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../authservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent implements OnInit {
public vendorLoginForm!: FormGroup

  constructor(private authService:AuthService, private formbuilder: FormBuilder, private http: HttpClient, private router: Router){
  }

  ngOnInit(): void {
    this.vendorLoginForm= this.formbuilder.group({
      username:[''],
      password:['']
    })
  }

vendorLogin(){
  this.http.get<any>("http://localhost:3000/vendorSignUp",)
  .subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.username === this.vendorLoginForm.value.username && a.password === this.vendorLoginForm.value.password
    });
    if (user){
    alert("Login Successful");
    this.authService.login();

    this.router.navigate(['seller-page']);
    }else{
      alert("User not Found, Wrong username or password");
    }
  },err=>{
    alert("Not Successful")
  })
  }

}
