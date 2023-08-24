import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  cartItems: any;
  totalPrice: any;
  orderDate: any;
  orderNumber: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
viewReceipt(){
  this.router.navigate(['receipt'], {
  queryParams: {
    cartItems: JSON.stringify(this.cartItems),
    totalPrice: this.totalPrice,
    orderDate: this.orderDate,
    orderNumber: this.orderNumber
  }
});

}
}
