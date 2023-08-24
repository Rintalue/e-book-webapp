import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from "@angular/forms"
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getInTouch=this.formBuilder.group({
      fullname:[''],
      email:[''],
      message:[''],

    })
  }
  public getInTouch!: FormGroup;
reset(){
  this.http.post<any>("http://localhost:3000/getInTouch", this.getInTouch.value)
  .subscribe(res=>{
    alert("Message Received, We will contact you shortly");

    this.router.navigate(['dashboard'])
  },err=>{
    alert("Not Successful")
  })
  }
}

