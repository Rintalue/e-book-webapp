import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.cartDetails();
    this.loadCart();
  }
  getCartDetails:any=[];
  cartDetails() {
    const localCartData = localStorage.getItem('localCart');
    if (localCartData !== null) {
      this.getCartDetails = JSON.parse(localCartData);
      console.log(this.getCartDetails);

    } else {
      console.log('No cart data found.');
    }
  }
  incQuantity(bookId: any, bookQuantity: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].bookId === bookId) {
        if (bookQuantity !== 10) {
          this.getCartDetails[i].bookQuantity = parseInt(bookQuantity) + 1;

          break;
        }
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
  this.loadCart();
  }

  decQuantity(bookId: any, bookQuantity: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].bookId === bookId) {
        if (bookQuantity !== 1) {
          this.getCartDetails[i].bookQuantity = parseInt(bookQuantity) - 1;

          break;
        }
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
  this.loadCart();
  }
total:number= 0;
loadCart(){
  if(localStorage.getItem('localCart')){
    const localData = localStorage.getItem('localCart');
    if (localData !== null) {
      this.getCartDetails = JSON.parse(localData);
      this.total = this.getCartDetails.reduce(function(acc:any, val:any){
        return acc + (val.bookPrice * val.bookQuantity);
      }, 0)

    }
  }
}
clear(){
  localStorage.removeItem('localCart');
  this.getCartDetails=[];
}

delete(getCartDetail:any){
console.log(getCartDetail)
if(localStorage.getItem('localCart')){
  const localData = localStorage.getItem('localCart');
  if (localData !== null) {
    this.getCartDetails = JSON.parse(localData);
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].bookId === getCartDetail) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))

          break;

}

    }
  }
}
}
checkout(){
  const queryParams = {
    cartItems: JSON.stringify(this.getCartDetails),
    totalPrice: this.total,
  };

  this.router.navigate(['/checkout'], { queryParams });

}
}
