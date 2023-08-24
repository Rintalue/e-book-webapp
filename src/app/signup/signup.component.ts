import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from "@angular/forms"
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 public signUpForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      fullname:[''],
      username:[''],
      email:[''],
      phoneno:[''],
      password:['']
    })
  }
signUp(){
this.http.post<any>("http://localhost:3000/signUpUsers", this.signUpForm.value)
.subscribe(res=>{
  alert("Sign Up Successful");
  this.signUpForm.reset();
  this.router.navigate(['login'])
},err=>{
  alert("Not Successful")
})
}
}
