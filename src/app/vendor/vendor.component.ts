import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from "@angular/forms"
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  public vendorSignUpForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.vendorSignUpForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
vendorSignup(){
this.http.post<any>("http://localhost:3000/vendorSignup", this.vendorSignUpForm.value)
.subscribe(res=>{
  alert("Sign Up Successful");

  this.router.navigate(['seller-login'])
},err=>{
  alert("Not Successful")
})
}
}
