import { Component, ElementRef, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements AfterViewInit {
  cartItems!: any[]; // Initialize as an empty array
  totalPrice: number = 0; // Initialize totalPrice

  @ViewChild('paymentRef') paymentRef!:ElementRef;


  constructor(private route: ActivatedRoute, private router: Router) {}

   ngAfterViewInit() {

    this.route.queryParams.subscribe(params => {
      if (params['cartItems']) {
        this.cartItems = JSON.parse(params['cartItems']);
      }
      if (params['totalPrice']) {
        this.totalPrice = parseFloat(params['totalPrice']);
      }
    });
    console.log(window.paypal)
    window.paypal.Buttons(
      {
        style:{
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal'
        },
        createOrder: (data:any, actions:any)=>{
          return actions.order.create({
            purchase_units:[
              {
                amount:{
                  value: this.totalPrice.toString(),
                  currency_code:'USD'
                }
              }
            ]
          });
        },
        onApprove: (data:any, actions:any)=>{
          return actions.order.capture().then((details: any)=>{
          if(details.status ==='COMPLETED'){
            this.router.navigate(['confirmation'])
          }
          });
        },
        onError: (error:any)=>{
          console.log(error)
        }
      }
    ).render(this.paymentRef.nativeElement);
  }
}
